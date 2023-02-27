import React, { useContext } from "react";
import { AppContext } from "../App";
import ImageBox from "./ImageBox";
import Loader from "./Loader";
import PhotoModal from "./PhotoModal";

const LandingPage = () => {
  const {
    setSearchInput,
    isLoading,
    searchInput,
    searchData,
    setImageDetails,
    data,
    imageDetails,
  } = useContext(AppContext);
  return (
    <section>
      <div className="landing-hero flex justify-center items-center">
        <div className="w-3/4 md:w-1/2">
          <h2 className="text-3xl lg:text-6xl font-extrabold text-white">
            Download High Quality Images by creators
          </h2>
          <p className="text-xl lg:text-3xl my-5 text-white font-semibold">
            The internet’s source for visuals. <br />
            Powered by creators everywhere.
          </p>
          <input
            className="border focus:outline-none bg-gray-200 w-full p-2 md:p-4 rounded-lg"
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search images"
          ></input>
        </div>
      </div>
      <div className="container mx-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 py-5 mx-5">
            {searchInput
              ? searchData?.map((img) => (
                  <ImageBox
                    img={img}
                    key={img.id}
                    setImageDetails={setImageDetails}
              
                  />
                ))
              : data?.map((img) => (
                  <ImageBox
                    img={img}
                    key={img.id}
                    setImageDetails={setImageDetails}
                  />
                ))}
          </div>
        )}
      </div>
      <PhotoModal imageDetails={imageDetails} />
    </section>
  );
};

export default LandingPage;
