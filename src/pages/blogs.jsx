import React from "react";
import bgabout from "../assets/images/bgabout.png";

const Blogs = () => {
  return (
    <>
      <div
        className="about-banner-section py-16 text-center  bg-gray-100"
        style={{
          backgroundImage: `url(${bgabout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%",
        }}
      >
        <h1 className="text-4xl font-bold">Blogs</h1>
        <p className="text-lg mt-4 text-gray-600">Home / Blogs</p>
      </div>
    </>
  );
};

export default Blogs;
