import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getBlogById } from "../http";
import { formatDate, valueConverter } from "../utils/index";
import FullScreenLoader from "../components/FullScreenLoader";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const hasFetched = useRef(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(blogId);
        const blog = res.data.blog;
        setBlog(blog);
      } catch (error) {
        console.log(error);
      }
    };

    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchBlog();
    }
    setLoader(false);
  }, [blogId]);


  if(loader) return <FullScreenLoader />
  return (
    <div className="w-full h-screen pt-24 px-10">
      {/* Date and Event */}
      <div className="flex items-center gap-2 font-[300] text-[#c1dbde]">
        <p className="flex items-center">{formatDate(blog.createdAt)}</p>
        <span className="pb-1">|</span>
        <p className="underline text-lg">{blog.category}</p>
      </div>

      <h1 className="mt-4 text-4xl font-[700] text-teal-400">{blog.title}</h1>

      <div className="mt-5 flex items-center gap-3 sm:gap-4">
        {/* profile_pic div */}
        <div className="overflow-hidden w-10 h-10 rounded-full flex items-center">
          <img src={blog.userProfileUrl} alt="profile_img" />
        </div>

        {/* User Detail div */}
        <div className="flex flex-col tracking-wide">
          <h1>{blog.name}</h1>
          <p className="text-xs font-[100]">{blog.role}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <hr />
        {/* Rxns Div */}
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1 text-sm">
            <MdOutlineRemoveRedEye size={20} />
            {valueConverter(blog.viewedBy?.length)}
          </p>
          <p className="flex items-center gap-1 text-sm">
            <FaRegHeart size={18} />
            {valueConverter(blog.likedBy?.length)}
          </p>
        </div>
        <hr />
      </div>

      {/* Content Div */}
      <div className="text-xl mt-4">
        <p>{blog.intro}</p>
      </div>

      {/* image div */}
      <div className="flex mx-auto w-full md:w-170 h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden rounded-xl items-center mt-4">
        <img className="h-full w-full" src={blog.imageUrl} alt="blog_img" />
      </div>

      <div>
        <pre type="1" className="flex flex-col gap-4 text-lg mt-8 whitespace-pre-wrap">
          {blog.content}
        </pre>
      </div>

      <hr className="py-6 mt-6" />
    </div>
  );
};

export default BlogPage;
