import React from "react";
import { Link } from "react-router-dom";
// import login_img from "../../assets/images/login.png";

const Login = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/B6rNsh9j/logo-maiya.png") `,
        backgroundRepeat: "no-repeat",
        // backgroundSize: "40%",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mt-[-0.5rem]">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link className="label-text-alt link link-hover">Forgot password? </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
