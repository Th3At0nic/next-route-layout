import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1>This is external image</h1>
      <Image
        src="https://refine.dev/blog/using-next-image/"
        height={500}
        width={500}
        alt="next image optimization"
      />
      <h1>This is normal image</h1>
      <img src="GalleryPage" width={500} height={500} alt="next image optimization" />
    </div>
  );
};

export default GalleryPage;
