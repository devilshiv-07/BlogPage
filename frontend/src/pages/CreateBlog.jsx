import React, { useState } from "react";
import { createBlog } from "../http";
import { enqueueSnackbar } from "notistack"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateBlog = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user.name,
    role: user.role,
    title: "",
    category: "",
    intro: "",
    content: "",
    image: null,
    userProfileUrl: user.profilePic,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createBlog(formData);
      console.log(res);
      const data = res.data;
      setFormData({
        name: "",
        role: "",
        title: "",
        category: "",
        intro: "",
        content: "",
        image: null,
      });
      enqueueSnackbar(data.message, {variant: "success"});

      navigate("/")

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[92vh] md:h-[90vh] mt-[8vh] md:mt-[10vh]">
      <div className="w-full px-6 py-10 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl">Create Blog</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="w-92 sm:w-100 md:w-108 lg:w-120 mt-10 flex flex-col"
          autoComplete="off"
        >
          {/* Form fields */}
          {[
            { id: "name", placeholder: "Enter your name" },
            { id: "role", placeholder: "Content creator" },
            { id: "title", placeholder: "Title goes here!" },
            { id: "category", placeholder: "News & Events" },
            { id: "intro", placeholder: "Brief Introduction!" },
          ].map(({ id, placeholder }) => (
            <div className="flex flex-col gap-2 mb-6" key={id}>
              <label htmlFor={id} className="text-[#919191] text-lg">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </label>
              <input
                id={id}
                type="text"
                name={id}
                value={formData[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className="border border-teal-300 rounded-[6px] px-3 py-1.5 text-[#919191] placeholder:text-[#717171]"
                required
              />
            </div>
          ))}
          
          {/* Content Div */}
          <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="content" className="text-[#919191] text-lg">
                Content
              </label>
              <textarea
                id="content"
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Detailed Content"
                className="border border-teal-300 rounded-[6px] px-3 py-1.5 text-[#919191] placeholder:text-[#717171]"
                required
                rows={3}
              />
            </div>

          {/* Image upload */}
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="image" className="text-[#919191] text-lg">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="border border-teal-300 rounded-[6px] file:px-3 file:py-1.5 file:bg-[#eae4e4] file:text-black file:font-[500] text-[#919191]"
              required
            />
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="text-2xl font-[500] rounded-[6px] mt-4 py-0.5 bg-teal-400 text-black"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
