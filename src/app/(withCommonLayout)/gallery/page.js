import Image from "next/image";
import React from "react";
import image1 from "../../assets/flower.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1>This is external image</h1>
      <Image
        src={image1}
        height={500}
        width={500}
        alt="next image optimization"
      />
      <Image
        src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?ga=GA1.1.718440294.1750567385&semt=ais_hybrid&w=740"
        height={500}
        width={500}
        alt="next image optimization"
      />
      <h1>This is normal image</h1>
    </div>
  );
};

export default GalleryPage;
