import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="bg-cyan-600">
      <div
        className="max-w-9xl   Blog relative w-full h-[400px] flex items-center justify-center bg-cover bg-center pt-12"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="text-black text-4xl font-bold">
          <p>Blogs</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10  mx-8 bg-cyan-600">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
