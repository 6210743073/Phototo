import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
const Navbar = ({ searchTerm, setsearchTerm, user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-center items-center w-full px-2 rounded-md bg-white border-none outline-none">
        <div className=" md:none text-4xl m-2 tracking-widest font-semibold italic text-center text-slate-900">
          รวมเเชร์ความทรงจำดีๆได้ที่ข้างล่าง{" "}
        </div>
        {/* <IoMdSearch fontSize={21} className="ml-1" /> */}
        {/* <input
          type="text"
          oncChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />  */}
      </div>
      <div className="flex gap-3 ">
        <Link to={`user-profile/${user._id}`} className="hidden md:block  ">
          <img src={user.image} alt="user" className="w-14 h-12 rounded-full" />
        </Link>
        
        <Link
          to="create-pin"
          className="bg-red-500 text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
