import React from "react";
import BannerImage from "../../assets/banner.png"
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between gap-12">

 {/* Image Section  */}
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={BannerImage} alt="Banner Image " />
      </div>

      {/* Text Section  */}
      <div  className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl  font-medium mb-7">
          New Release This Week
        </h1>
        <p className="mb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi unde,
          omnis vitae consequatur quisquam laborum reprehenderit. Praesentium,
          error. Mollitia, distinctio?
        </p>
        <button className="btn-primary">Subscuribe</button>
      </div>

     
    </div>
  );
};

export default Banner;
