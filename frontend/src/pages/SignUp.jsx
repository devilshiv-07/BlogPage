import { useState } from "react";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbUserQuestion } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const handlechange = (e) => {
    setFormData({...formData, [e.target.name]: [e.target.value]})
  };

  return (
    <div className="w-full h-[92vh] md:h-[90vh] flex items-center justify-center -mt-6 sm:-mt-4">
      {/* form div */}
      <div className="form_container w-76 md:w-90 lg:w-100 flex items-center justify-center relative overflow-hidden z-10">
        <div className="form w-full m-1 px-8 md:px-12 py-10 flex flex-col items-center bg-black z-20">

          {/* Login Heading */}
          <h2 className="text-4xl mb-12 mt-2">SignUp</h2>

          {/* Form */}
          <form method="post" className="w-full">

            {/* Name div */}
            <div className="flex items-center mb-8">
              <label>
                <FaUser size={18} />
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handlechange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="text"
                placeholder="Name"
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
                onChange={handlechange}
                className="w-full px-2 border-b py-1 placeholder-teal-400"
                type="email"
                placeholder="Email"
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
                onChange={handlechange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="password"
                placeholder="Password"
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
                onChange={handlechange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type="text"
                placeholder="Phone"
              />
            </div>

            {/* Role div */}
            <div className="flex items-center mb-10">
              <label>
                <TbUserQuestion size={18} />
              </label>
              <input
                name="role"
                value={formData.role}
                onChange={handlechange}
                className="w-full px-3 border-b py-1 placeholder-teal-400"
                type=""
                placeholder="Role: [Content-creator, User]"
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