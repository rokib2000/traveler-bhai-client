import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AddReview from "../../Shared/AddReview/AddReview";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, description, image, location, price, title } = service;

  return (
    <div className="container mx-auto">
      <div className="md:w-1/2 rounded overflow-hidden shadow-lg mx-auto my-12">
        <PhotoProvider>
          <PhotoView src={image}>
            <img className="w-full" src={image} alt={title} />
          </PhotoView>
        </PhotoProvider>

        {/* <img className="w-full" src={image} alt="Sunset in the mountains" /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="flex justify-between my-4">
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-gray-700 text-base">
              <span className="font-semibold">Price:</span> ${price}
            </p>
          </div>
          <p className="text-gray-700 text-base break-words">{description}</p>
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
                <p className="relative text-lg whitespace-nowrap truncate overflow-hidden">Rokib</p>
                <Link className="text-gray-500 text-xl">
                  <i className="fa-solid fa-trash"></i>
                </Link>
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

      <AddReview key={_id} service={service}></AddReview>
    </div>
  );
};

export default ServiceDetails;
