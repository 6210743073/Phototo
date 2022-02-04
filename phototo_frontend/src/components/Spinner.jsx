import React from "react";
import { TailSpin } from "react-loader-spinner";
const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full  ">
      <div className="m-10">
        <TailSpin color="#ff0000" height={60} width={200} />
      </div>
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
