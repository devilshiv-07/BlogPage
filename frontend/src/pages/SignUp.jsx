import { useState } from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbUserQuestion } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* form div */}
      <div className="form_container w-92 md:w-96 lg:w-100 flex items-center justify-center relative overflow-hidden z-10 bg-[#1111215a] sm:mt-[14vh]">
        <div className="form w-full m-1 px-8 md:px-10 py-10 flex flex-col items-center bg-black z-20">

          {/* Login Heading */}
          <h2 className="text-4xl mb-10 mt-2">SignUp</h2>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>

            {/* Name div */}
            <div className="flex items-center mb-8">
              <label>
                <FaUser size={18} />
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            {/* Email div */}
            <div className="flex items-center mb-8">
              <label>
                <MdOutlineEmail size={22} />
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 border-b py-1 placeholder-teal-400"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            {/* Password div */}
            <div className="flex items-center mb-8">
              <label>
                <FaUnlockKeyhole size={18} />
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* Phone div */}
            <div className="flex items-center mb-8">
              <label>
                <FaPhoneAlt size={18} />
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="text"
                placeholder="Phone"
                required
              />
            </div>

            {/* Role div */}
            <div className="flex items-center mb-8">
              <label>
                <TbUserQuestion size={18} />
              </label>
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="text"
                placeholder="Role: [Admin, Content-creator, User]"
              />
            </div>

            {/* Profile Pic div */}
            <div className="flex items-center mb-10">
              <label>
                <CgProfile size={18} />
              </label>
              <input
                name="profilePic"
                onChange={handleChange}
                accept="image/*"
                className="w-full border-b file:py-1 file:px-3 file:text-teal-400 cursor-pointer"
                type="file"
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full border-1 border-yellow-300 py-1 text-lg tracking-wide rounded-full mb-6"
              type="submit"
            >
              SignUp
            </button>
          </form>

          {/* FP and Register */}
          <div className="w-full text-teal-400 flex justify-between items-center">
            <p>Already have account</p>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;