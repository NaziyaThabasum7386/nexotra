// import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../../data/blogPosts";
// import ReactMarkdown from "react-markdown";
// import { Helmet } from "react-helmet";
//import img1 from "../assets/blogs/Img_1.png";
import img1 from "../../assets/blogs/Img_1.png";
import img2 from "../../assets/blogs/Img_2.png";
import img3 from "../../assets/blogs/Img_3.png";
import img4 from "../../assets/blogs/Img_3.png";
import img5 from "../../assets/blogs/Img_3.png";
import Footer from "../footer";
const imageMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
};

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || "", 10);
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <Link
            to="/"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-9xl   Blog relative w-full h-[400px] flex items-center justify-centert-12"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="text-black text-4xl font-bold">
          <p>Blogs</p>
        </div>
      </div>

      <div className=" mt-20">
        <Link
          to="/blogs"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>

        <div className="flex w-full">
          <div className="flex-1 p-5 ">
            <p className="text-4xl text-[#12266f] font-bold p-5">
              {post.div1.p1}
            </p>
            <p className="text-black  font-semibold p-5">{post.div1.p2}</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={imageMap[post.id]}
              alt="Placeholder Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 p-5 text-black ">
          <h2 className="text-xl font-bold mb-4 text-red-500">
            {post.div2.h2}
          </h2>
          <p>{post.div2.p1}</p>
          <ul className="mt-4">
            {Object.values(post.div2.u1).map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

        <div className="w-full">
          <div className="p-5 text-black">
            <h2 className="text-xl font-bold mb-4 text-red-500">
              {post.div3.h2}
            </h2>
            <ul>
              {Object.values(post.div3.u1).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div className="p-5 text-black">
            <h2 className="text-xl font-bold mb-4 text-red-500">
              {post.div4.h2}
            </h2>
            <ul>
              {Object.values(post.div4.u1).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div className="p-5 text-black">
            <h2 className="text-xl font-bold mb-4  text-red-500">
              {post.div5.h2}
            </h2>
            <ul>
              {Object.values(post.div5.u1).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <p> {post.div5.p} </p>
          </div>

          <div className="p-5 text-black">
            <h2 className="text-xl font-bold mb-4  text-red-500">
              {post.div6.h2}
            </h2>
            <p>{post.div6.p1}</p>
            <p>{post.div6.p2}</p>
          </div>

          <div className="p-5 text-black">
            <h2 className="text-xl font-bold mb-4  text-red-500">Conclusion</h2>
            <p>{post.conclusion.p1}</p>
            <p>{post.conclusion.p2}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
