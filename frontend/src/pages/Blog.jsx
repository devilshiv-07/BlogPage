import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {

  const [criteria, setCriteria] = useState("Trending");

  return (
    <section className="w-full h-screen py-6 mt-[10vh]">

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
              className={`${ criteria === "Trending" ? "bg-black text-teal-400": ""} px-4 py-2 rounded`}
            >
              Trending
            </button>
            <button 
              onClick={() => setCriteria("Latest")} 
              className={`${ criteria === "Latest" ? "bg-black text-teal-400": ""} px-4 py-2 rounded`}
            >
              Latest
            </button>
          </div>
        </div>

        {/* BlogCards Div */}
        <div className="w-full flex flex-wrap  gap-6 sm:gap-7">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
