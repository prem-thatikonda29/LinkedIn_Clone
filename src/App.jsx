import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Login from "./pages/Login/Login";
import Widgets from "./Components/Widgets/Widgets";
import ProfilePage from "./pages/Profile/Profile";
import ProfileForm from "./pages/Profile/ProfileForm";
import { selectUser, login } from "./features/userSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

  return (
    <BrowserRouter>
      <section>
        <Header />
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              }
            />
            <Route
              path="/home"
              element={
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path={`/update/:id`} element={<ProfileForm />} />
          </Routes>
        )}
      </section>
    </BrowserRouter>
  );
}

export default App;
