import React, {useState} from "react";
import Shield from "../../assets/Shield.svg";
import Add from "../../assets/Shield.svg";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/Delete.svg";
import Remove from "../../assets/Remove.png";
import User from "../../assets/User 2.svg";
import Search from "../../assets/search.svg";

function Patients() {
  const [input, setInput] = useState("");

  const patients = [
    {
      id: "1",
      name: "Harry Jacksonn",
    },
    {
      id: "2",
      name: "Harry Jacksonn",
    },
    {
      id: "3",
      name: "Harry Jacksonn",
    },
    {
      id: "4",
      name: "Harry Jacksonn",
    },
    {
      id: "5",
      name: "Harry Jacksonn",
    },
    {
      id: "6",
      name: "Harry Jacksonn",
    },
    {
      id: "7",
      name: "Harry Jacksonn",
    },
    {
      id: "8",
      name: "Harry Jacksonn",
    },
  ];

  return (
    <div className="mt-4">
    <div className="flex w-40 justify-between mb-16 ml-4">
    <img src={Add} alt="Shield" className="w-10" />
    <img src={Shield} alt="Shield" className="w-10" />
    <img src={Delete} alt="Shield" className="w-10" />
    </div>
    <div class="relative mx-auto px-4 py-2 bg-[#499189]  rounded-2xl flex justify-center w-[50vw]">
          <img src={Search} alt="search" className="h-5 mr-2" />
          <input
            type="text"
            name="name"
            onChange={(e) => setInput(e.target.value)}
            className="block w-full appearance-none rounded-xl text-white bg-[#499189] focus:outline-none"
          />
        </div>
      <div className=" mx-auto mt-12 flex flex-wrap w-[60vw] justify-between">
      {patients.map((pat) => {
        return (
          <div className="  w-[28vw] bg-[#75c6bc7e] mr-2 mb-5 p-2 rounded-3xl flex justify-between">
            <div className="flex  items-center">
              <img src={User} className="w-8 mr-4" />
              <p className="mr-20 text-[#499189]">{pat.name}</p>
            </div>
            <div className="flex px-4 items-center ">
              <img src={Edit} onClick={()=>{
                window.location.href="/canvas"
              }} className="w-6 h-6 mr-2 cursor-pointer" />
              <img src={Remove} className="w-6 h-6" />
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Patients;
