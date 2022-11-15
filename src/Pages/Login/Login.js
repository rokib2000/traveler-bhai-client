import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ChangePageTitle from "../Shared/ChangePageTitle/ChangePageTitle";

const Login = () => {
  const { signInWithGoogle, signInEmailPassword } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmailPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        const currentUser = {
          email: user.email,
        };

        // get jwt

        fetch("https://traveler-bhai-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("travelerToken", data.token);
          });

        if (user) {
          toast.success("Login Successfully!");
          navigate(from, { replace: true });
          form.reset();
        }
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);

        const currentUser = {
          email: user.email,
        };

        // get jwt

        fetch("https://traveler-bhai-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.token);
            localStorage.setItem("travelerToken", data.token);
          });

        if (user) {
          toast.success("Login Successfully!");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
        // toast.error(error.massage);
      });
  };

  return (
    <>
      <ChangePageTitle pageTitle="Log In - Traveler Bhai" />
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url("https://i.postimg.cc/B6rNsh9j/logo-maiya.png") `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold mt-[-0.5rem]">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link className="label-text-alt link link-hover">Forgot password? </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Log in
                  </button>
                </div>
              </form>
              <p className="text-center ">
                New to Traveler Bhai{" "}
                <Link className="text-cyan-500 font-semibold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
              <div className="divider">OR</div>
              <div className="card-body">
                <div className="form-control ">
                  <button onClick={handleGoogleLogin} type="submitF" className="btn btn-primary">
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Log in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
