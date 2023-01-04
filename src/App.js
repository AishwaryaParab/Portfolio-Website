import React, { useEffect, useState } from "react";
import {Navbar, Intro, About, Skills, Timeline, Footer, Download, Projects} from "./components";
import "./styles.css";
import { ClimbingBoxLoader } from "react-spinners";
import HomePage from "./pages/HomePage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2500);
  }, [])

  return (
    <div className={loading ? "App-loading" : "App"}>
      
      {loading ? <ClimbingBoxLoader className="loader" color={'#A460ED'} loading={loading} size={30} /> : (
          <HomePage />
        )
       }
    </div>
  );
}

export default App;
