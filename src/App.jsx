import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
