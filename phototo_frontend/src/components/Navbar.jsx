import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

import { GoogleLogout } from "react-google-login";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();
  const [isopen, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
      <div className="flex justify-center items-center w-full bg-neutral-200 px-2 py-1 rounded-full border-none outline-none">
        <IoMdSearch fontSize={30} className="ml-3 text-black" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-inherit outline-none "
        />
      </div>
      <div className="flex gap-3">
        <Link
          to="create-pin"
          className=" bg-red-500 text-white font-semibold px-16 rounded-full flex justify-center items-center w-12 h-12 md:w-14 md:h-12 "
        >
          Create
        </Link>
        <div class="relative inline-block ">
          <button
            onClick={() => setOpen(!isopen)}
            class="relative z-10 flex items-center p-4 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
          >
            <svg
              class="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {isopen && (
            <div className="absolute z-50 right-0 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
              <div className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <img
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src={user.image}
                  alt="user avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {user.userName}
                  </h1>
                </div>
              </div>
              <hr className="border-gray-200 dark:border-gray-700 " />
              <Link
                to={`user-profile/${user._id}`}
                class="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5 mx-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                    fill="currentColor"
                  ></path>
                </svg>

                <span className="mx-1">view profile</span>
              </Link>
              <GoogleLogout
                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                render={(renderProps) => (
                  <button
                    className="w-full"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <div className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <span className="mx-1">Log out</span>
                    </div>
                  </button>
                )}
                onLogoutSuccess={logout}
                cookiePolicy="single_host_origin"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
