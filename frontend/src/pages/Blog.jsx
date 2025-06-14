import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { getAllBlogs } from "../http/index";
import { useSelector } from "react-redux";

const Blog = () => {
  const [criteria, setCriteria] = useState("Trending");
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await getAllBlogs({
        pageNumber: page,
        category: criteria,
      });

      setBlogs(data.blog);
      setTotalPages(data.totalPages);
    };

    fetchBlogs();
  }, [criteria, page]);

  const prev = () => {
    if (page === 1) {
      enqueueSnackbar("It is the first page only", { variant: "warning" });
    } else setPage((prev) => prev - 1);
  };

  const next = () => {
    if (!totalPages) {
      enqueueSnackbar("There's no page available", { variant: "warning" });
      return;
    }
    if (page === totalPages) {
      enqueueSnackbar("It is the last page", { variant: "warning" });
    } else setPage((prev) => prev + 1);
  };

  return (
    <section className="w-full flex flex-col h-[90vh] pt-6 mt-[10vh]">
      {/* Main container */}
      <div className="w-full px-4 sm:px-10 flex flex-col items-center gap-12">
        {/* Header div */}
        <div className="flex flex-col gap-3 align items-center">
          {/* Heading */}
          <h1 className="text-4xl font-[500]">To-Let Tales</h1>
          {/* Quote */}
          <p className="text-teal-400">
            Dive into a Sea of Endless Stories and Insights
          </p>
          {/* buttons div */}
          <div className="mt-6 flex items-center gap-2 bg-[#373535] p-1 rounded-[6px]">
            <button
              onClick={() => setCriteria("Trending")}
              className={`${
                criteria === "Trending" ? "bg-black text-teal-400" : ""
              } px-4 py-2 rounded`}
            >
              Trending
            </button>
            <button
              onClick={() => setCriteria("Latest")}
              className={`${
                criteria === "Latest" ? "bg-black text-teal-400" : ""
              } px-4 py-2 rounded`}
            >
              Latest
            </button>
          </div>
        </div>

        {/* BlogCards Div */}
        <div className="w-full flex flex-wrap  gap-6 sm:gap-7">
          {blogs.length === 0 ? (
            <div className="mx-auto h-[42vh]">
              <h1 className="text mt-[50%] text-teal-400 text-xl">
                No Blogs available
              </h1>
            </div>
          ) : (
            blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
          )}
        </div>
      </div>

      <div className="mx-auto pt-6 pb-14">
        <div className="bg-[#525151] p-1 flex items-center gap-3 rounded-[6px]">
          {/* Page forward */}
          <button
            className="px-4 py-1 bg-black rounded-[6px] text-blue-500"
            onClick={prev}
          >
            Prev.
          </button>

          <p className="bg-black rounded-full px-3 py-1">{page}</p>

          {/* Page backWard */}
          <button
            className="px-4 py-1 bg-black rounded-[6px] text-blue-500"
            onClick={next}
          >
            Next
          </button>
        </div>
      </div>

      {role === "Content creator" || role === "Admin" ? (
        <div className="mx-auto">
          <button
            className="text-xl tracking-wide font-bold py-2.5 px-10 rounded-lg bg-[#292828] mb-16 hover:text-black hover:bg-teal-400"
            onClick={() => navigate("/create-blog")}
          >
            Create Blog
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Blog;
