import React from "react";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark");
  }
  return <Landing />;
}

export default App;
