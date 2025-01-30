import "./App.css";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { BsApple } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Login from "./Login"; // Import the Login component

function App() {
  return (
    <div className="w-full">
      <Login /> {/* Use the Login component */}
    </div>
  );
}

export default App;