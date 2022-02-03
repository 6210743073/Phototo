import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { client } from "../client";
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    const { name, googleId, email, imageUrl } = response.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      email: email,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <div className="flex flex-col md:flex-row-reverse h-screen items-center">
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          alt="ภาพพื้นหลัง"
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1643198964380-a3d9a8b47f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-5xl text-center font-bold">PhoToTo</h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Login to your account
          </h1>
          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-gray-200 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                required
              />
            </div>
            <div className="mt-4 ">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength={6}
                name=""
                className="w-full bg-gray-200 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                required
              />
            </div>

            <button
              className="w-full bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
              type="sunmit"
            >
              Log in
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
            render={(renderProps) => (
              <button
                type="button"
                className="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semiblod rounded-lg px-4 py-3 border"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <div className="flex items-center justify-center ">
                  <FcGoogle className="" aria-hidden="true" />
                  <span className="ml-4">Sign in with Google</span>
                </div>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <p className="mt-8 ">
            Need an account?
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 font-semiblod"
            >
              create an account
            </a>
          </p>
          <p className="text-sm text-center text-gray-500 mt-12">
            &copy; 2022 PhoToTo Login Landing Page
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
