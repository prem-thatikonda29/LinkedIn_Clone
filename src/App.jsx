import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Login from "./pages/Login/Login";
import AdditionalInfoForm from "./pages/AdditionalInfoForm/AdditionalInfoForm";
import Widgets from "./Components/Widgets/Widgets";
import ProfilePage from "./pages/Profile/Profile";
import ProfileForm from "./pages/Profile/ProfileForm";
import Network from "./pages/Network/Network";
import { selectUser, login } from "./features/userSlice";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is already logged in (e.g., by checking token in local storage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      // If user data found, dispatch login action with stored user data
      dispatch(login(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const IsAuth = ({ children }) => {
    return !user ? <Navigate to="/login" /> : children;
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/additional-info" element={<AdditionalInfoForm />} />

          <Route
            path="/home"
            element={
              <IsAuth>
                <Home />
              </IsAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <IsAuth>
                <ProfilePage />
              </IsAuth>
            }
          />
          <Route
            path="/update/:id"
            element={
              <IsAuth>
                <ProfileForm />
              </IsAuth>
            }
          />
          <Route
            path="/network"
            element={
              <IsAuth>
                <Network />
              </IsAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
