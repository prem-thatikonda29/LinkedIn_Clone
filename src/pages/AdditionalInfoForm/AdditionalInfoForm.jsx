import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
// import "./AdditionalInfoForm.css";

function AdditionalInfoForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [additionalInfo, setAdditionalInfo] = useState({
    headline: "",
    education: [],
    city: "",
    country: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const updatedUser = { ...user, ...additionalInfo };

    fetch(`http://localhost:3500/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateUser(data));
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile"); // Assuming you have a profile route
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Error updating user");
      });
  };

  return (
    <div className="additionalInfoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Headline"
          name="headline"
          onChange={handleInput}
          value={additionalInfo.headline}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={handleInput}
          value={additionalInfo.city}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={handleInput}
          value={additionalInfo.country}
        />
        {/* Add more fields as necessary */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AdditionalInfoForm;
