import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="md:w-1/2 rounded overflow-hidden shadow-lg mx-auto my-12">
        <img className="w-full" src="https://placeimg.com/400/225/arch" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <div className="flex justify-between my-4">
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Location:</span> Bangladesh
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Price:</span> $999
            </p>
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            20 Review
          </span>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto">
        <h2 className="text-4xl mb-8">Reviews</h2>
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="relative flex gap-4">
            <img
              src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
              className="relative rounded-full   bg-white border h-14 w-14"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-lg whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                <a className="text-gray-500 text-xl" href="#">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Maxime quisquam vero adipisci beatae voluptas dolor ame.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto">
        <form className="w-full  bg-white rounded-lg px-4 pt-2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new review</h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="textarea textarea-bordered w-full"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full md:w-full flex items-start md:w-full px-3">
              <div className="-mr-1">
                <input type="submit" className="btn btn-primary" value="Post Review" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
