import React from "react";

const MyReview = () => {
  return (
    <div>
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">My Review</h1>
            <p className="py-6"> </p>
          </div>
        </div>
      </div>
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
              <tr>
                <th>
                  <label>
                    <button className="btn btn-circle btn-outline btn-error btn-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>
                  <button className="btn  btn-success btn-sm">Details</button>
                </td>
                <th>
                  <button className="btn btn-outline btn-accent btn-sm">Edit</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
