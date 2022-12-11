import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import {
  MdDashboard,
  MdFormatListBulleted,
  MdAccountCircle,
  MdMenu,
} from "react-icons/md";

const Sidebar = (props) => {
  const [active, toggleActive] = useState(0);

  const LINKS = [
    {
      name: "Dashboard",
      link: "#",
      icon: <MdDashboard className="text-2xl" />,
    },
    {
      name: "Tasks",
      link: "#",
      icon: <MdFormatListBulleted className="text-2xl " />,
    },
  ];

  return (
    <div
      className={
        props.open
          ? "absolute lg:relative z-10 bg-white transition duration-500"
          : "-translate-x-full sm:translate-x-0 absolute lg:relative z-10 bg-white transition duration-500"
      }
    >
      <div
        className={
          props.open
            ? "w-64 border transition-[width] duration-500 ease-in-out overflow-hidden h-screen py-4 border-gray-300 px-4"
            : "border w-20  transition-[width] duration-500 ease-in-out overflow-hidden h-screen py-4 border-gray-300 px-4"
        }
      >
        <div className="flex flex-col h-full">
          <div className="py-2 flex items-center mb-8 space-x-8">
            <button
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-300 bg-gray-200 transition duration-300"
              onClick={() => props.toggleOpen()}
            >
              <MdMenu className="text-2xl text-gray-700" />
            </button>
            <img src={Logo} alt="logo" className="h-8" />
          </div>
          <div className="flex flex-col space-y-8">
            {LINKS.map((val, idx, arr) => {
              return (
                <a
                  key={idx}
                  href={val.link}
                  className={
                    active === idx
                      ? "flex space-x-8 items-center active "
                      : "flex space-x-8 items-center "
                  }
                  onClick={() => toggleActive(idx)}
                >
                  <i className="hover:text-primary-200 transition-colors duration-400 p-2">
                    {val.icon}
                  </i>
                  <span>{val.name}</span>
                </a>
              );
            })}
          </div>
          <a
            href="#"
            className="flex space-x-8 items-center mt-auto justfy-self-end bg-primary-300 hover:bg-primary-200 transition duration-400 p-2 py-2.5 rounded-[48px]"
          >
            <i className="hover:text-primary-200 ml-0.5 transition-colors duration-200">
              <MdAccountCircle className="text-2xl text-white" />
            </i>
            <span className="text-white">Account</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
