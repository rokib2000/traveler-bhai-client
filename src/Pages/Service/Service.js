import React from "react";

const Service = () => {
  return (
    <div>
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All Popular Services</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Provident cupiditate voluptatem et in.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 my-12">
          {/* card start  */}
          <div className="w-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://placeimg.com/400/225/arch" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Location:</span> Bangladesh
              </p>
              <p className="text-gray-700 text-base">
                <span className="font-semibold">Price:</span> $999
              </p>
              <p className="text-gray-700 text-base">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil.
                </small>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                20 Review
              </span>
              <button className="btn btn-primary ">View Details</button>
            </div>
          </div>
          {/* card end  */}
        </div>
      </div>
    </div>
  );
};

export default Service;
