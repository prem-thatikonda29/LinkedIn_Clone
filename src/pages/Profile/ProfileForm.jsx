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
    experience: [],
    education: [],
    city: "",
    country: "",
    bannerImage: "",
    about: "",
  });

  const [educationEntry, setEducationEntry] = useState({
    degree: "",
    orgName: "",
    duration: "",
  });

  const [experienceEntry, setExperienceEntry] = useState({
    expTitle: "",
    expOrgName: "",
    expDuration: "",
    expAbout: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleEducationInput = (event) => {
    const { name, value } = event.target;
    setEducationEntry({ ...educationEntry, [name]: value });
  };

  const handleExperienceInput = (event) => {
    const { name, value } = event.target;
    setExperienceEntry({ ...experienceEntry, [name]: value });
  };

  const addEducationEntry = () => {
    const newEducationEntry = {
      degree: educationEntry.degree,
      orgName: educationEntry.orgName,
      duration: educationEntry.duration,
    };

    setUser((prevState) => ({
      ...prevState,
      education: [...prevState.education, newEducationEntry],
    }));
    setEducationEntry({
      degree: "",
      orgName: "",
      duration: "",
    });
    console.log(user);
  };

  const addExperienceEntry = () => {
    const newExperienceEntry = {
      expTitle: experienceEntry.expTitle,
      expOrgName: experienceEntry.expOrgName,
      expDuration: experienceEntry.expDuration,
      expAbout: experienceEntry.expAbout,
    };

    setUser((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, newExperienceEntry],
    }));
    setExperienceEntry({
      expTitle: "",
      expOrgName: "",
      expDuration: "",
      expAbout: "",
    });
    console.log(user);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const usersUrl = `http://localhost:3500/users/${user.id}`;

    try {
      const response = await fetch(usersUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const userData = await response.json();
      dispatch(updateUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("User update successful:", userData);
    } catch (error) {
      console.error("Error updating user:", error);
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
          placeholder="Title (Position)"
          name="expTitle"
          onChange={handleExperienceInput}
          value={experienceEntry.title}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Organization Name"
          name="expOrgName"
          onChange={handleExperienceInput}
          value={experienceEntry.orgName}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="Duration"
          name="expDuration"
          onChange={handleExperienceInput}
          value={experienceEntry.duration}
        />
        <input
          type="text"
          className={styles.inp}
          placeholder="About"
          name="expAbout"
          onChange={handleExperienceInput}
          value={experienceEntry.about}
        />
        <button type="button" onClick={addExperienceEntry}>
          Add Experience
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
