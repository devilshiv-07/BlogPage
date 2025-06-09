import React, { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiSolidHeart } from "react-icons/bi";
import { formatDate, valueConverter, limitWords } from "../utils/index"
import { likeBlogById } from "../http";
import { enqueueSnackbar } from "notistack"

const BlogCard = ({ blog }) => {

    const navigate = useNavigate();
    const [like, setLike] = useState(blog.likedBy.length);
    // const [color, setColor] = useState("");

    const handleClick = () => {
        navigate(`/blog/${blog._id}`)
    }

    const handleLike = async (e) => {
      e.preventDefault();
      try {
        const res = await likeBlogById(blog._id);
        const data = res.data;
        setLike(data.likeCount);
        // setColor(data.color);
        
      } catch (error) {
        enqueueSnackbar(error.response.data.message, {variant: "warning"});
      }
    }

  return (
    <div className="flex flex-col items-start lg:w-[47%] xl:w-[31.7%] rounded-2xl border-b-5 border-b-[#919191] hover:border-b-teal-400 mb-10">

      {/* image div */}
      <div className="w-full h-[30vh] overflow-hidden rounded-xl flex items-center cursor-pointer" onClick={handleClick}>
        <img
          src={blog.imageUrl}
          alt="blog_img"
        />
      </div>

      {/* Content Div */}
      <div className="px-4 flex flex-col">

        {/* Date and Event */}
        <div className="flex items-center gap-2 mt-4">
          <p className="flex items-center font-[600] text-[#d9d8d8]">{formatDate(blog.createdAt)}</p>
          <span className="pb-1">|</span>
          <p className="underline">{blog.category}</p>
        </div>

        <h1 onClick={handleClick} className="mt-6 text-2xl font-[600] text-teal-400 hover:underline cursor-pointer">{limitWords(blog.title, 8)}</h1>

        <p className="mt-6 text-[#989898]">{limitWords(blog.intro)}</p>
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
                <img src={blog.userProfileUrl} alt="profile_img" />
            </div>

            {/* User Detail div */}
            <div className="flex flex-col">
                <h1>{blog.name}</h1>
                <p className="text-xs font-[100] text-[#e6e6e699]">{blog.role}</p>
            </div>
        </div>

        {/* Rxns Div */}
        <div className="flex items-center gap-6">
            <p className="flex items-center gap-1 text-sm">
                <MdOutlineRemoveRedEye size={20} />
                {valueConverter(blog.viewedBy.length)}
            </p>
            <p className="flex items-center gap-1 text-sm">
                <BiSolidHeart className={`cursor-pointer ${like > 0 ? "text-red-500" : ""}`} onClick={handleLike} size={18}/>
                {valueConverter(like)}
            </p>
        </div>
      </div>

    </div>
  );
};

export default BlogCard;
