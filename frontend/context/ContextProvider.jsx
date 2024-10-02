/* eslint-disable react/prop-types */
import React, { useState, createContext, useRef } from 'react';
import axios from 'axios';

export const InputContext = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const ref=useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInput("");

    let chatNew = [
      ...chat,
      {
        user: "You",
        message: `${input}`,
      },
    ];
    const messages = chatNew.map((message) => message.message).join("\n");
    setChat(chatNew);

    const response = await axios.post("http://127.0.0.1:8000", {
        message:messages
    });


    if (!response) {
      console.log("Error in response");
    }

    setChat([
      ...chatNew,
      {
        user: "Chatgpt",
        message: response.data.response.replaceAll("*",""),
      },
    ]);
  };

  // clering the chat
  function clearChat() {
    setChat([]);
  }

  return (
    <InputContext.Provider
      value={{ input, setInput, handleSubmit, chat, setChat,ref,clearChat }}
    >
      {children}
    </InputContext.Provider>
  );
}

export default ContextProvider;
