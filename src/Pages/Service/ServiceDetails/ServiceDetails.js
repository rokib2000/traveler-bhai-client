import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AddReview from "../../Shared/AddReview/AddReview";
import ReviewShowCard from "../../Shared/ReviewShowCard/ReviewShowCard";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, description, image, location, price, title } = service;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
            {reviews.length} Review
          </span>
        </div>
      </div>

      <div className="md:w-1/2 mx-auto">
        <h2 className="text-4xl mb-8">Reviews</h2>
        {reviews.map((review) => (
          <ReviewShowCard key={review._id} review={review}></ReviewShowCard>
        ))}
      </div>

      <AddReview key={_id} service={service}></AddReview>
    </div>
  );
};

export default ServiceDetails;
