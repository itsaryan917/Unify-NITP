import { useState } from "react";
import { MdPerson } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordView = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image from Public Folder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      ></div>

      {/* Semi-transparent Overlay for Depth */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Floating Orbs Effect */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-300/30 rounded-full blur-[100px] top-10 left-10"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-60 h-60 bg-pink-300/30 rounded-full blur-[100px] bottom-10 right-10"
        animate={{ x: [-50, 50, -50], y: [50, -50, 50] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Glassmorphism Login Box */}
      <div className="relative w-[90%] max-w-sm md:max-w-md p-6 flex flex-col items-center gap-4 
                      rounded-xl shadow-lg bg-white/20 backdrop-blur-xl border border-white/30">
        <img src="/logo.png" alt="logo" className="w-14" />
        <h1 className="text-xl font-semibold text-white">UNIFY</h1>
        <p className="text-sm text-gray-200 text-center">
          Don't have an account? <span className="text-white cursor-pointer">Sign up</span>
        </p>

        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="w-full flex items-center gap-3 bg-white/20 p-3 rounded-xl backdrop-blur-lg">
            <MdPerson className="text-black text-lg" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="w-full flex items-center gap-3 bg-white/20 p-3 rounded-xl backdrop-blur-lg">
            <FaFingerprint className="text-black text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-none text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <button type="button" onClick={togglePasswordView} className="text-black text-lg">
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="w-full text-right">
            <span className="text-blue-300 text-sm hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
