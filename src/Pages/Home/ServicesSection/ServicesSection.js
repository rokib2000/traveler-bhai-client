import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://traveler-bhai-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const homeServices = data.slice(0, 3);
        // console.log(services);
        setServices(homeServices);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-12">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="py-6"></p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* card start  */}
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
        {/* card end  */}
      </div>
      <div className="my-12 text-center">
        <Link to="/services" className="btn btn-wide btn-outline btn-primary">
          See All
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
