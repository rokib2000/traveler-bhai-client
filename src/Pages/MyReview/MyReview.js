import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import ChangePageTitle from "../Shared/ChangePageTitle/ChangePageTitle";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      })
      .catch((err) => console.error(err));
  }, [reviews]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("delete successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <ChangePageTitle pageTitle="My Review - Traveler Bhai" />
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">My Reviews</h1>
            <p className="py-6"> </p>
          </div>
        </div>
      </div>
      {reviews.length === 0 ? (
        <h2 className="text-3xl text-center h-screen">No data Found</h2>
      ) : (
        <div className="container mx-auto">
          <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Service Name</th>
                  <th>Review</th>
                  <th>Service Details</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {/* {reviews.length === 0 && <tr className="text-3xl text-center col-span-full">No data Found</tr>} */}
                {reviews.map((reviewDetails) => (
                  <MyReviewCard
                    key={reviewDetails._id}
                    handleDelete={handleDelete}
                    reviewDetails={reviewDetails}
                  ></MyReviewCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReview;
