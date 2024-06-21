import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section>
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </section>
  );
}

export default App;
