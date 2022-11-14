import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-c.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        toast.success("Logout Successfully!");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/services">Service</Link>
      </li>

      <li>
        <Link to="/addService">Add Service</Link>
      </li>

      <li>
        <Link to="/myReview">My Reviews</Link>
      </li>

      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 my-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="h-20" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 font-semibold">
            {user?.uid ? (
              <li>
                <button onClick={handleLogout} className="btn  btn-ghost " type="submit">
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login" className="btn  btn-ghost  ">
                  Login
                </Link>
              </li>
            )}
          </ul>

          <label className="btn btn-ghost btn-circle avatar ">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="https://i.postimg.cc/T3LxnWxY/profile.png" alt="" />
              )}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
