import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl m-5 h-[550px]">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-300 object-cover  "
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4">{post.brief}</p>

        <Link
          to={`/post/${post.id}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
        >
          Read more
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
