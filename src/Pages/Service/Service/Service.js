import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Service = () => {
  const services = useLoaderData();

  return (
    <div>
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">All Popular Services</h1>
            <p className="py-6"></p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 my-12">
          {/* card start  */}
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
          {/* card end  */}
        </div>
      </div>
    </div>
  );
};

export default Service;
