import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddReview = ({ service }) => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  const { displayName, email, photoURL } = user;

  const { _id } = service;

  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const body = form.body.value;

    const review = { review: body, userName: displayName, userEmail: email, userPhoto: photoURL, serviceID: _id };

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
          <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new review</h2>
          <div className="w-full md:w-full px-3 mb-2 mt-2">
            <textarea
              className="textarea textarea-bordered w-full"
              name="body"
              placeholder="Type Your Review"
              required
            ></textarea>
          </div>
          <div className="w-full md:w-full flex items-start  px-3">
            <div className="-mr-1">
              <input type="submit" className="btn btn-primary" value="Post Review" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
