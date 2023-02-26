import React from "react";
import {
  AiOutlineUser,
  AiOutlineLike,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const PhotoModal = ({ imageDetails }) => {
  return (
    <div>
      <input type="checkbox" id="photo-modal" className="modal-toggle" />
      <label htmlFor="photo-modal" className="modal cursor-pointer">
        <label className="modal-box relative p-0">
            {/* modal Image */}
          <img
            src={imageDetails?.urls.raw}
            alt="UnsplashImageRaw"
            className="h-96 w-full"
          />
          {/* modal content */}
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-4">
              <img
                src={imageDetails?.user.profile_image.small}
                alt="userImage"
                className="rounded-full"
              />
              <div>
                <p className="flex items-center gap-2 font-semibold">
                  <AiOutlineUser /> {imageDetails?.user.name}
                </p>
                <p className="flex items-center gap-2 font-semibold">
                  <AiOutlineLike /> {imageDetails?.likes}
                </p>
              </div>
            </div>
            
            <div>
              {imageDetails?.user.social.instagram_username && (
                <p className="flex items-center gap-2 font-semibold">
                  <AiOutlineInstagram />{" "}
                  {imageDetails?.user.social.instagram_username}
                </p>
              )}

              {imageDetails?.user.social.twitter_username && (
                <p className="flex items-center gap-2 font-semibold">
                  <AiOutlineTwitter />{" "}
                  {imageDetails?.user.social.twitter_username}
                </p>
              )}
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default PhotoModal;
