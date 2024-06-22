import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Login from "./pages/Login";
import Widgets from "./Components/Widgets/Widgets";
import { selectUser, login } from "./features/userSlice";

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
    <section>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </section>
  );
}

export default App;
