import React, { useContext } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoMdSave } from "react-icons/io";
import { FaUpload } from "react-icons/fa";
import { ImSpinner } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { InputContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { clearChat } = useContext(InputContext);
  
  return (
    <div className="mx-2 my-2 py-4 flex flex-row justify-between bg-white/1 rounded-xl px-4">
      <ImCross
        size={30}
        color="green"
        className="cursor-pointer hover:text-green-600"
        onClick={()=>clearChat()}
      />
      <div className="flex flex-row gap-4">
       
        <IoMdSave
          size={15}
          className="cursor-pointer hover:text-green-600"
          color="green"
        />
        <FaUpload
          size={15}
          className="cursor-pointer hover:text-green-600"
          color="green"
        />
      </div>
    </div>
  );
};

export default Navbar;
