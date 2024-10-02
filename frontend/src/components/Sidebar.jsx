import React from "react";
import logo from "../assets/logo.png";
import book from "../assets/book.png";

const Sidebar = () => {
  return (
    <div className=" left-0 top-0 h-screen w-1/5 px-2 py-2 relative border-r-2 border-spacing-1 flex-shrink-0 min-w-[300px] border-green-600 md:block hidden">
      <div className="bg-white/1 z-100 flex h-[700px] flex-col gap-1">
        <div className="flex flex-row gap-2 items-center bg-white/10 p-3 rounded-2xl">
          <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
          <h1>Bristo 😊</h1>
        </div>
        <div className="p-3 rounded-2xl mt-2 bg-white/10 flex flex-row gap-2 items-center">
          <img src={book} alt="book" className="rounded-full w-10 h-10" />
          <h1>Journal</h1>
        </div>
        <div className="flex-1 gap-1 p-3 rounded-2xl  mt-2 bg-white/10">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl text-gray-600">
              Book you have to learn.
            </h1>
            <hr />
            <ul className="flex flex-col gap-1 p-2 cursor-pointer text-white">
              <li className="font-normal text-[16px]  hover:bg-white/10 p-2 hover:text-green-600">
                Atomic Habits
              </li>
              <li className="hover:bg-white/10 p-2 font-normal text-[16px] hover:text-green-600">
                The Power of Now
              </li>
              <li className="font-normal text-[16px]  hover:bg-white/10 p-2 hover:text-green-600">
                The New Psychology of Success
              </li>
              <li className="font-normal text-[16px]  hover:bg-white/10 p-2 hover:text-green-600">
                The Power of Passion and Perseverance
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl text-gray-600">Movies...</h1>
            <hr />
            <ul className="flex flex-col gap-1 p-2 cursor-pointer text-white ">
              <li className="font-normal text-[16px]  hover:bg-white/10 p-2 hover:text-green-600">
                Five Feet Apart
              </li>
              <li className="font-normal text-[16px] hover:bg-white/10 p-2 hover:text-green-600">
                The Fault in Our Stars
              </li>
            </ul>
          </div>
        </div>
        <button className="w-full px-2 py-4 rounded-2xl  bg-green-600 mt-2">
          New Chat
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
