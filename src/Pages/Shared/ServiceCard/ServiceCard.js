import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, location, price, image, description } = service;
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-gray-700 text-base break-words">
          <small>{description.slice(0, 100)}</small>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-end ">
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}
        <Link to={`/service/${_id}`} className=" btn btn-primary ">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
