import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddReview = ({ service }) => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  //   const { displayName, email, photoURL } = user;

  const { _id } = service;

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const body = form.body.value;

    const review = {
      review: body,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      serviceID: _id,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added Successfully");
          form.reset();
        }
      });
  };
  return (
    <div className="md:w-1/2 mx-auto">
      <form onSubmit={handleReviewSubmit} className="w-full  bg-white rounded-lg px-4 pt-2">
        <div className="flex flex-wrap -mx-3 mb-6">
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-xl font-medium">Add a new review</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="textarea textarea-bordered w-full"
              name="body"
              placeholder="Type Your Review"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start  px-3 mb-8">
            <div className="-mr-1">
              {user?.uid ? (
                <button type="submit" className="btn btn-primary">
                  Post Review
                </button>
              ) : (
                <div className="alert  alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-info flex-shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Please login to write a review</span>
                  </div>
                  <div className="flex-none">
                    <Link to="/login" className="btn btn-sm btn-primary">
                      Log In
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
