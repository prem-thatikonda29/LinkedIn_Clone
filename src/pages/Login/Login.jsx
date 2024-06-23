import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:3500/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          dispatch(login(user));
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        alert("Error fetching users");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      image,
    };

    fetch("http://localhost:3500/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(login(data));
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        alert("Error registering user");
      });

    fetch("http://localhost:3500/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log("Added into db successfuly : ", newUser))
      .catch((e) => console.log(e));
  };

  return (
    <div className="login">
      <form action="">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign in</button>
        <p>
          New user?
          <span className="login__register" onClick={handleRegister}>
            Register now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
