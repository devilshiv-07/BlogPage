import React, { useState } from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center sm:pt-6">
      {/* form div */}
      <div className="form_container w-76 md:w-86 lg:w-90 flex items-center justify-center relative overflow-hidden z-10 bg-[#1111215a]">
        <div className="form w-full m-1 px-8 md:px-10 py-16 flex flex-col items-center bg-black z-20">

          {/* Login Heading */}
          <h2 className="text-5xl mb-14">Login</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* name div */}
            <div className="flex items-center mb-10">
              <label>
                <MdOutlineEmail size={27} />
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handlechange}
                className="w-full px-3 border-b py-1 text-lg placeholder-teal-400"
                type="email"
                placeholder="Email"
              />
            </div>

            {/* password div */}
            <div className="flex items-center mb-14">
              <label>
                <FaUnlockKeyhole size={21} />
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handlechange}
                className="w-full px-3 border-b text-lg placeholder-teal-400"
                type="password"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full border-1 border-yellow-300 py-1 text-lg tracking-wide rounded-full mb-8"
              type="submit"
            >
              LOGIN
            </button>
          </form>

          {/* FP and Register */}
          <div className="w-full text-teal-400 flex justify-between items-center">
            <p>Don't have an Account</p>
            <Link to="/signup">SingUp</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;