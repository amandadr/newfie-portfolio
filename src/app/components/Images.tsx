import React from "react";

interface ImageProps {
  images: { [key: string]: string };
}

const Images: React.FC<ImageProps> = ({ images }) => {
  const imagesArr = Object.values(images);
  return (
    <div>
      {imagesArr.map((e) => (
        <img src={e} key={e} style={{ display: "none" }} />
      ))}
    </div>
  );
};

export default Images;