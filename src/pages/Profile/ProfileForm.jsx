import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, selectUser } from "../../features/userSlice";
import styles from "./ProfileForm.module.css";

function ProfileForm() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const [user, setUser] = useState({
    id: "",
    name: "", 
    email: "",
    image: "",
    headline: "",
    education: [],
    city: "",
    country: "",
  });

  const [educationEntry, setEducationEntry] = useState({
    degree: "", 
    orgName: "",
    duration: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetchUserData();
    }
  }, []);

  const fetchUserData = () => {
    fetch(`http://localhost:3500/userData/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleEducationInput = (event) => {
    const { name, value } = event.target;
    setEducationEntry({ ...educationEntry, [name]: value });
  };

  const addEducationEntry = () => {
    setUser((prevState) => ({
      ...prevState,
      education: [...prevState.education, educationEntry],
    }));
    setEducationEntry({
      degree: "",
      orgName: "",
      duration: "",
    });
  };

  const updateUserInDb = async (url, method) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const userUrl = `http://localhost:3500/userData/${user.id}`;
    const usersUrl = `http://localhost:3500/users/${user.id}`;

    const checkAndUpdateUser = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status === 404) {
          // User does not exist, perform POST request
          return updateUserInDb(`http://localhost:3500/userData`, "POST");
        } else if (response.ok) {
          // User exists, perform PUT request
          return updateUserInDb(url, "PUT");
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        console.error("Error checking user:", err);
      }
    };

    try {
      // Check and update user in userData
      const userResponse = await checkAndUpdateUser(userUrl);
      if (!userResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await userResponse.json();
      dispatch(updateUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("UserData update successful:", userData);

      // Check and update user in users
      const usersResponse = await checkAndUpdateUser(usersUrl);
      if (!usersResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const usersData = await usersResponse.json();
      console.log("Users update successful:", usersData);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className={styles.profileForm}>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className={styles.inp}
          required
          placeholder="Enter Name"
          name="name"
          onChange={handleInput}
          value={user.name}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Profile Pic URL"
          name="image"
          onChange={handleInput}
          value={user.image}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Banner URL"
          name="bannerImage"
          onChange={handleInput}
          value={user.bannerImage}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Headline"
          name="headline"
          onChange={handleInput}
          value={user.headline}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="About"
          name="about"
          onChange={handleInput}
          value={user.about}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Degree"
          name="degree"
          onChange={handleEducationInput}
          value={educationEntry.degree}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Organization Name"
          name="orgName"
          onChange={handleEducationInput}
          value={educationEntry.orgName}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Duration"
          name="duration"
          onChange={handleEducationInput}
          value={educationEntry.duration}
        />
        <button type="button" onClick={addEducationEntry}>
          Add Education
        </button>
        <input
          type="text"
          className={styles.inp}
          required
          placeholder="City"
          name="city"
          onChange={handleInput}
          value={user.city}
        />
        <input
          type="text"
          className={styles.inp}
          required
          placeholder="State"
          name="state"
          onChange={handleInput}
          value={user.state}
        />
        <input
          type="text"
          className={styles.inp}
          required
          placeholder="Country"
          name="country"
          onChange={handleInput}
          value={user.country}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProfileForm;
