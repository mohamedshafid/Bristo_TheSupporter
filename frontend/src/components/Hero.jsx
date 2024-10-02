import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { RxUpload } from "react-icons/rx";
import Queries from "./Queries";
import { InputContext } from "../../context/ContextProvider";

const Hero = () => {
  const [query, setQuery] = useState(false);
  const { input, setInput,handleSubmit,ref } = useContext(InputContext);

  return (
    <div className="flex-1 relative">
      <Navbar />
      {!query ? (
        <div className="w-full h-screen max-w-[600px] mx-auto grid place-content-center -mt-20">
          <div className="bg-white/10  p-6 rounded-xl text-center flex flex-col items-center gap-4 relative">
            <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
            <h1 className="font-bold text-2xl">How can i help you Today!</h1>
            <p className="text-gray-300 font-light">
              Bristo is your friendly AI companion focused on supporting your
              mental well-being. With a compassionate approach, Bristo offers
              clear advice and reminders to empower you in navigating lifes
              challenges. Think of Bristo as a caring friend always ready to
              listen and encourage you!{" "}
            </p>
            <div className="grid grid-flow-row grid-cols-3 gap-2">
              <div className="bg-white/10 p-6 grid place-content-center rounded-lg">
                <h1>
                  Query your Feelings Here and make yourself positive vibe...
                </h1>
              </div>
              <div className="bg-white/10 p-6 grid place-content-center rounded-lg">
                <h1>Get Motivated with suggestions of books and movies...</h1>
              </div>
              <div className="bg-white/10 p-6 grid place-content-center rounded-lg">
                <h1>
                  Always share your experience and feel comfortable with us...
                </h1>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="relative w-full flex flex-row"
            >
              <input
                type="text"
                placeholder="write your quries..."
                className="p-4 flex-1 text-black"
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 top-1  grid place-content-center bg-green-600 p-4 rounded-sm"
                onClick={() => setQuery(!query)}
                ref={ref}
              >
                <RxUpload />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <Queries />
        </div>
      )}
    </div>
  );
};

export default Hero;
