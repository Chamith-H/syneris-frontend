import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Routings } from "./components/Routings";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BackLoader } from "./components/shared/back-loader/BackLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time (e.g., fetching data, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after some delay
    }, 1000); // Change the delay time as needed

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);
  return (
    <div className="App">
      {isLoading && <BackLoader />}

      <Header />
      <Routings />
      <Footer />
    </div>
  );
}

export default App;
