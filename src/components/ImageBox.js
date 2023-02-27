import React from "react";
import { AiOutlineUser, AiOutlineLike } from "react-icons/ai";

const ImageBox = ({ img , setImageDetails}) => {
  return (
    <div
      key={img?.id}
      className="shadow-xl my-4 rounded-b-xl"
    >
      <label htmlFor="photo-modal" onClick={()=> setImageDetails(img)}>
        <img
          src={img?.urls.thumb}
          alt="UnsplashImage"
          className="rounded-t-xl cursor-pointer w-full"
        />
      </label>
      <div className="md:flex items-center justify-between p-4">
        <p className="flex items-center gap-2 text-sm md:font-semibold">
          <AiOutlineUser/> {img?.user.name}
        </p>
        <p className="flex items-center gap-2 text-sm md:font-semibold">
          <AiOutlineLike/> {img?.likes}
        </p>
      </div>
    </div>
  );
};

export default ImageBox;
