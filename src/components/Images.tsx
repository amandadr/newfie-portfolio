import React from "react";
import images from "data/Images";

const Images: React.FC = () => {
  return (
    <div>
      {images.map((e: any) => (
        <img src={e} key={e} style={{ display: "none" }} />
      ))}
    </div>
  );
};

export default Images;