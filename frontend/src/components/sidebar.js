import React, { Component } from "react";
import Logo from "../assets/logo.png";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdDashboard,
  MdFormatListBulleted,
  MdAccountCircle,
} from "react-icons/md";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      active: 0,
    };
  }

  LINKS = [
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
  toggleActive = (idx) => {
    this.setState({ active: idx });
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div className="hidden sm:block absolute lg:relative z-10 bg-white">
        <div
          className={
            this.state.open
              ? "w-64 border hidden sm:block transition-[width] duration-500 ease-in-out overflow-hidden h-screen py-4 border-gray-300 px-4"
              : "border w-20 transition-[width] duration-500 ease-in-out overflow-hidden h-screen py-4 border-gray-300 px-4"
          }
        >
          <div className="flex flex-col h-full">
            <div className="flex space-x-6 mb-12 items-baseline">
              <img src={Logo} alt="logo" className="ml-1.5" />
              <span className="font-bold text-xl uppercase px-4">Tasky</span>
            </div>
            <div className="flex flex-col space-y-8">
              {this.LINKS.map((val, idx, arr) => {
                return (
                  <a
                    key={idx}
                    href={val.link}
                    className={
                      this.state.active === idx
                        ? "flex space-x-8 items-center active "
                        : "flex space-x-8 items-center "
                    }
                    onClick={() => this.toggleActive(idx)}
                  >
                    <i className="hover:text-primary-200 transition-colors duration-400 p-2">
                      {val.icon}
                    </i>
                    <span>{val.name}</span>
                  </a>
                );
              })}
              <div className="py-2 flex justify-end">
                {this.state.open ? (
                  <button
                    className="p-4 text-gray-700"
                    onClick={() => this.toggleOpen()}
                  >
                    <MdArrowBackIos />
                    <div className="inline "></div>
                  </button>
                ) : (
                  <button
                    className="p-4 rounded-md  text-gray-700"
                    onClick={() => this.toggleOpen()}
                  >
                    <MdArrowForwardIos />
                  </button>
                )}
              </div>
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
  }
}
