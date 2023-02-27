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
          {
            imageDetails?.urls.raw ?
            <img
            src={imageDetails?.urls.raw}
            alt="UnsplashImageRaw"
            className="h-96 w-full"
          />
          :
          "Loading..."
          }
          
          {/* modal content */}
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-4">
              <img
                src={imageDetails?.user.profile_image.medium}
                alt="userImage"
                className="rounded-full"
              />
              <div>
                <p className="flex items-center gap-2 font-bold">
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

          {imageDetails?.tags && (
            <div className="p-4">
              <p className="font-bold">Related Tags</p>
              <div className="flex gap-2 mt-5">
                {imageDetails?.tags.map((t) => (
                  <p className="px-2 py-1 bg-base-300 rounded-md font-semibold">{t.title}</p>
                ))}
              </div>
            </div>
          )}
        </label>
      </label>
    </div>
  );
};

export default PhotoModal;
