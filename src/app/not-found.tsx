import React from "react";
import Details from "components/Details";

const NotFoundPage: React.FC = () => {
  return (
    <div
      className="NotFoundPage bg-[rgba(0, 0, 0, 0.92)] w-[100%] h-[100vh] flex justify-center items-center"
    >
      <Details
        header="404 Not Found - Dassit Bh'y"
        previewText="Apparently, I sent you on a goose chase? Sorry about that... Why not try going to the home page? <-- Click the image!"
        bgImage={"butters_3.jpeg"}
        navItems={[
          {
            imageUrl: "butters_2.jpeg",
            label: "Home",
            target: "_self",
            url: "/",
          },
        ]}
      />
    </div>
  );
};

export default NotFoundPage;
