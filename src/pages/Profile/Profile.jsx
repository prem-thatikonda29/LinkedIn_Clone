import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { selectUser, updateUser } from "../../features/userSlice";
import "./Profile.css";

function ProfilePage() {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const user = useSelector(selectUser);
  const [info, setInfo] = useState({});
  const [education, setEducation] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      fetch(`http://localhost:3500/users/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
          setEducation(data.education || []);
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [user]);

  const handleDeleteEducation = (index) => {
    // Create a copy of the education array
    const updatedEducation = [...education];
    // Remove the education entry at the specified index
    updatedEducation.splice(index, 1);
    // Update the local state
    setEducation(updatedEducation);
    // Update the user object
    const updatedUser = {
      ...info,
      education: updatedEducation,
    };
    setInfo(updatedUser);
    // Update the user data in the Redux store
    updateUserInRedux(updatedUser);
    // Update the user data in the database
    updateUserInDatabase(updatedUser);
  };

  const updateUserInRedux = (updatedUser) => {
    // Dispatch an action to update the user in Redux store
    dispatch(updateUser(updatedUser)); // Use dispatch function here
    // Update the user data in localStorage (if needed)
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  const updateUserInDatabase = (updatedUser) => {
    // Update the user data in the database
    const usersUrl = `http://localhost:3500/users/${user.id}`;
    fetch(usersUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((userData) => {
        console.log("User update successful:", userData);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <>
      <div className="body">
        <main>
          <div className="hero">
            <div className="hero-banner">
              <img
                src={info.bannerImage}
                alt="Banner"
                className="hero-banner-image"
                id="hero-banner-image"
              />
              <Link to={`/update/${user.id}`}>
                <label className="editBanner" htmlFor="hero-banner-image">
                  Edit Banner
                </label>
              </Link>
            </div>
            <div className="hero-avatar">
              <img src={info.image} alt="Profile" id="profile-pic" />
            </div>
          </div>
          <div className="intro">
            <div className="intro-name">{info.name}</div>
            <div className="intro-desc">
              <p>{info.headline}</p>
            </div>
          </div>

          <section className="about" id="about">
            <h2>About</h2>
            <p className="about-desc">{info.about}</p>
          </section>

          <section className="experience" id="experience">
            <h2>Experience</h2>
            {/* Experience items */}
          </section>

          <section className="education" id="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div className="edu-item" key={index}>
                <div className="edu-img">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/1200px-GGSIU_logo.svg.png"
                    alt="GGSIPU"
                  />
                </div>
                <div className="edu-details">
                  <h4 className="edu-name">{edu.degree}</h4>
                  <div className="edu-org-name">{edu.orgName}</div>
                  <div className="edu-duration">{edu.duration}</div>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDeleteEducation(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="contact-details">
              <Link to="tel:1234567890">☎️ +91-1234567890</Link>
              <Link to="mailto:sahilsable737@gmail.com">📩 Email</Link>
              <Link to="https://www.linkedin.com/in/sahil-sable-61460423b/">
                LinkedIn
              </Link>
              <Link to="https://github.com/sahils1201/">Github</Link>
              <Link to="https://x.com/sahils1201">Twitter</Link>
            </div>
          </section>
        </main>
      </div>

      <footer></footer>
    </>
  );
}

export default ProfilePage;
