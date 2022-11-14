import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const LoadingSpinner = ({ children }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default LoadingSpinner;
