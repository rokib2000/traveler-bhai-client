import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyReviewCard = (props) => {
  const { handleDelete } = props;
  const { _id, review, serviceID } = props.reviewDetails;

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setService(data);
      })
      .catch((err) => console.error(err));
  }, []);

  //   console.log(service);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-error btn-sm">
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
              <img src={service?._id === serviceID ? service?.image : ""} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service?._id === serviceID ? service?.title : ""}</div>
          </div>
        </div>
      </td>
      <td>{review}</td>
      <td>
        <Link to={`/service/${service?._id}`} className="btn  btn-success btn-sm">
          Details
        </Link>
      </td>
      <th>
        <button className="btn btn-outline btn-accent btn-sm">Edit</button>
      </th>
    </tr>
  );
};

export default MyReviewCard;
