import React, { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { validRegister } from "../utils/valid";
import { useNavigate } from "react-router-dom";
import Errors from "../components/global/Errors";
import { client } from "../client";
import { v4 as uuidv4 } from "uuid";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cf_password, setCfPassword] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const user = { name, email, password, cf_password };
    const result = validRegister(user);
    if (result.errLength)
      return toast.error(() => <Errors errors={result.errMsg} />);
    registerwithEmail(user);
  };
  const registerwithEmail = async (user) => {
    const { name, email, password } = user;
    const doc = {
      _id: uuidv4(),
      _type: "user",
      userName: name,
      email: email,
      password: password,
    };

    try {
      client.createIfNotExists(doc).then((res) => {
        navigate("/", { replace: true });
        console.log(res);
      });
    } catch {}
  };

  return (
    <div className="flex flex-col md:flex-row-reverse h-screen items-center">
      <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          alt="ภาพพื้นหลัง"
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1641824780302-d918ddc3ba08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        />
      </div>
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-5xl text-center font-bold">PhoToTo</h1>
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">
            Register an account
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <label className="block text-gray-700">Display Name</label>
              <input
                type="name"
                placeholder="Enter Display Name"
                className="w-full bg-gray-200 rounded-lg mb-3 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-gray-200 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4 ">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                minLength={6}
                id="password"
                className="w-full bg-gray-200 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 ">
              <label className="block text-gray-700">Comfirm Password</label>
              <input
                type="password"
                placeholder="Comfirm Password"
                minLength={6}
                id="cf_password"
                className="w-full bg-gray-200 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none px-4 py-3"
                value={cf_password}
                onChange={(e) => setCfPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
              type="submit"
            >
              Register
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />

          <p className="mt-8">
            Already got account ?
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-semiblod"
            >
              Log in
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

export default Register;
