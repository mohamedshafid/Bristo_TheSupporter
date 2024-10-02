/* eslint-disable react/prop-types */
import React, { Suspense, useContext, useEffect, useState } from "react";
import { RxUpload } from "react-icons/rx";
import robo from "../assets/robo.png";
import { InputContext } from "../../context/ContextProvider";

const Queries = () => {
  const { input, setInput, handleSubmit, chat, ref } = useContext(InputContext);
  
  return (
    <div className=" max-w-[90%] mx-auto">
      <div className="py-4 flex flex-col gap-">
        <div className="relative overflow-y-scroll h-[530px] transition">
            {chat.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-[90%] mx-auto absolute bottom-10"
      >
        <input
          type="text"
          placeholder="write your quries..."
          className="p-4 flex-1 rounded-2xl text-black"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          ref={ref}
          type="submit"
          className="absolute right-1 top-1  grid place-content-center bg-green-600 p-4 rounded-2xl"
        >
          <RxUpload />
        </button>
      </form>
    </div>
  );
};

const TypewriterEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return <div>{ displayedText }</div>
};

const ChatMessage = ({ message }) => {
  return (
      <div>
        {message.user == "Chatgpt" ? (
          <div className="flex flex-row gap-2 items-start mt-4">
            <img
              src={robo}
              alt="robo"
              className="w-8 h-8 rounded-full bg-green-600 animate-pulse"
            />
            <p className="text-start">
            {<TypewriterEffect text={message.message} speed={50}/>}
            </p>{" "}
          </div>
        ) : (
          <div className="w-full flex justify-end items-center">
            <p className="p-4 mt-4  rounded-xl w-fit text-end bg-white/10">
              {message.message}
            </p>
          </div>
        )}
      </div>
  );
};

export default Queries;
