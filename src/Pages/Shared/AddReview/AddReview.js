import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddReview = ({ handleReviewSubmit }) => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  //   const { displayName, email, photoURL } = user;

  //   const { _id } = service;

  //   const handleReviewSubmit = (event) => {
  //     event.preventDefault();

  //     const form = event.target;
  //     const body = form.body.value;
  //     const date = new Date();

  //     const review = {
  //       review: body,
  //       userName: user?.displayName,
  //       userEmail: user?.email,
  //       userPhoto: user?.photoURL,
  //       serviceID: _id,
  //       date: date,
  //     };

  //     fetch("http://localhost:5000/reviews", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(review),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.acknowledged) {
  //           toast.success("Review Added Successfully");
  //           form.reset();
  //         }
  //       });
  //   };
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
            <div className="-mr-1 w-full">
              {user?.uid ? (
                <button type="submit" className="btn btn-primary">
                  Post Review
                </button>
              ) : (
                <div className="alert  alert-error shadow-lg ">
                  <div className="w-full">
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
