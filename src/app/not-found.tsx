import React from "react";
import Details from "components/Details";

const NotFoundPage: React.FC = () => {
  return (
    <div
      className="NotFoundPage"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.92)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
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
