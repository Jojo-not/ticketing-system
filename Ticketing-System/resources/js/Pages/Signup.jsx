
import { useState } from "react";
import SignupImage from "../../assets/hero-3.png";
import QtechLogo from "../../assets/qtechlogo.png";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // TODO: CAll API to register user
    // For now, we'll just log the form data

    alert("Form submitted!");
  }

  return (
    <div className="min-h-screen flex bg-[#0D0630] text-gray-900 font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-[#0D0630] text-white flex flex-col justify-center items-start p-12 space-y-6 rounded-l-xl">
        <img src={QtechLogo} alt="Qtech Logo" className="h-12 mb-4"/>
        <h1 className="text-3xl font-bold">We simply position ourselves</h1>
        <p className="text-sm text-gray-300">
          as an ICT company for those who have no ICT department.
        </p>
        <img
          src={SignupImage}
          alt="Cloud Visual"
          className="rounded-lg max-w-md mt-4"
        />
      
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white p-12 rounded-r-xl flex flex-col justify-center">
        <div className="flex justify-end mb-4">
          <a href="#" className="text-sm font-medium text-black">
            About Us
          </a>
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mb-2">Sign Up</h2>
        <p className="text-sm mb-4">
          Already have an account?{" "}
          <a href="/Signin" className="text-blue-600 font-medium hover:underline">Signin</a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-md px-4 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-sm text-blue-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border rounded-md px-4 py-2 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-sm text-blue-500"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            <label>
              I have read & accept the{" "}
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
