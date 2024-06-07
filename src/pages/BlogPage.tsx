import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="BlogPage" style={{ width: "100vw", height: "100vh" }}>
      <Introduction
        header="Soon enough, a blog will sit here!"
        previewText="I'm working on it, I promise! It'll feature snack-sized updates on my projects, and maybe a few other things I find interesting, too!"
        imageUrl=""
      />
      <Footer />
    </div>
  );
};

export default BlogPage;