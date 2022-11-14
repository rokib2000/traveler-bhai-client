import React from "react";
import { Link } from "react-router-dom";

const ReviewShowCard = (props) => {
  //   console.log(review);

  const { review, userName, userPhoto } = props.review;
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div className="relative flex gap-4">
        <img
          src={userPhoto ? userPhoto : "https://i.postimg.cc/T3LxnWxY/profile.png"}
          className="relative rounded-full   bg-white border h-14 w-14"
          alt=""
          loading="lazy"
        />
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-lg whitespace-nowrap truncate overflow-hidden">{userName}</p>
            <Link className="text-gray-500 text-xl">
              <i className="fa-solid fa-trash"></i>
            </Link>
          </div>
          <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
      </div>
      <p className="-mt-4 text-gray-500">{review}</p>
    </div>
  );
};

export default ReviewShowCard;
