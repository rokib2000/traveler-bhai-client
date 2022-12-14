import React from "react";
import toast from "react-hot-toast";
import ChangePageTitle from "../Shared/ChangePageTitle/ChangePageTitle";

const AddService = () => {
  const handleServiceAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const location = form.location.value;
    const image = form.image.value;
    const description = form.description.value;
    const date = new Date();

    const service = { date, title, price, location, image, description };

    fetch("https://traveler-bhai-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));

    // console.log(service);
  };

  return (
    <div>
      <ChangePageTitle pageTitle="Add Service - Traveler Bhai" />
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Add Your Travel Service</h1>
            <p className="py-6"> </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-12">
          <div className="w-full">
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
              <div className="bg-white w-full shadow rounded p-8 sm:p-12 ">
                <form onSubmit={handleServiceAdd}>
                  <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                      <label className="font-semibold leading-none">Service Title</label>
                      <input
                        type="text"
                        className="input input-bordered mt-4"
                        placeholder="Enter your service title"
                        required
                        name="title"
                      />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                      <label className="font-semibold leading-none">Price</label>
                      <input
                        type="text"
                        className="input input-bordered mt-4"
                        placeholder="Enter your service price"
                        required
                        name="price"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none">Location</label>
                      <input
                        type="text"
                        className="input input-bordered mt-4"
                        placeholder="Enter location"
                        required
                        name="location"
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                      <label className="font-semibold leading-none">Image URL</label>
                      <input
                        type="text"
                        className="input input-bordered mt-4"
                        placeholder="Enter your image url"
                        required
                        name="image"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-full flex flex-col mt-8">
                      <label className="font-semibold leading-none">Description</label>
                      <textarea
                        type="text"
                        className="h-40 textarea textarea-bordered mt-4"
                        placeholder="Enter your service description..."
                        required
                        name="description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center  w-full">
                    <button type="submit" className="mt-9 btn btn-primary">
                      Add Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
