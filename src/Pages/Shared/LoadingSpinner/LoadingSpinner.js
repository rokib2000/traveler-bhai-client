import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const LoadingSpinner = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default LoadingSpinner;
