import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const BlogCard = ({ blog }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog`)
    }

    console.log(blog);

  return (
    <div className="flex flex-col items-start lg:w-[47%] xl:w-[31.7%] rounded-2xl border-b-5 border-b-[#919191] hover:border-b-teal-400 mb-10">

      {/* image div */}
      <div className="w-full h-[30vh] overflow-hidden rounded-xl flex items-center cursor-pointer" onClick={handleClick}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
          alt="blog_img"
        />
      </div>

      {/* Content Div */}
      <div className="px-4 flex flex-col">

        {/* Date and Event */}
        <div className="flex items-center gap-2 mt-4">
          <p className="flex items-center font-[600] text-[#d9d8d8]">Tue 27 Aug 2024</p>
          <span className="pb-1">|</span>
          <p className="underline">News & Events</p>
        </div>

        <h1 onClick={handleClick} className="mt-6 text-2xl font-[600] text-teal-400 hover:underline cursor-pointer">Season like this and a day like this...</h1>

        <p className="mt-6 text-[#989898]">If you just love to travel and reach places where you can relax your mind and eyes with the beauty of nature then this is it...</p>
      </div>

      {/* Read More div */}
      <button 
        className="px-4 mt-10 text-teal-400 flex items-center gap-1.5 cursor-pointer"
        onClick={handleClick}
      >
        Read More 
        <MdOutlineArrowRightAlt size={20} />
      </button>

      {/* Creator Info and Rxns */}
      <div className="w-full flex items-center justify-between my-5 px-4">

        {/* contact div */}
        <div className="flex items-center gap-3 sm:gap-4">

            {/* profile_pic div */}
            <div className="overflow-hidden w-10 h-10 rounded-full flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8uPahgoQ-QpRIzGilpiskF67MbGATe-Hxg&s" alt="profile_img" />
            </div>

            {/* User Detail div */}
            <div className="flex flex-col">
                <h1>Little Krishna</h1>
                <p className="text-xs font-[100] text-[#e6e6e699]">Universe Creator</p>
            </div>
        </div>

        {/* Rxns Div */}
        <div className="flex items-center gap-6">
            <p className="flex items-center gap-1 text-sm">
                <MdOutlineRemoveRedEye size={20} />
                99B+
            </p>
            <p className="flex items-center gap-1 text-sm">
                <FaRegHeart size={18}/>
                99M+
            </p>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
