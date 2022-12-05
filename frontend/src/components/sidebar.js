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
      open: true,
      active: 0,
    };
  }

  LINKS = [
    {
      name: "Dashboard",
      link: "#",
      icon: <MdDashboard className="text-xl" />,
    },
    {
      name: "Tasks",
      link: "#",
      icon: <MdFormatListBulleted className="text-xl" />,
    },
  ];
  toggleActive = (idx) => {
    this.setState({ active: idx });
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
    let sidebar = document.getElementById("sidebar");
  };

  render() {
    return (
      <div className="hidden lg:block">
        <div
          className={
            this.state.open
              ? "w-64 border overflow-hidden h-screen py-4 border-gray-300 px-4"
              : "border w-16 overflow-hidden h-screen py-4 border-gray-300 px-4"
          }
        >
          <div className="flex flex-col divide-y-2">
            <div className="flex space-x-6 mb-12">
              <img src={Logo} alt="logo" />
              <span>Tasky</span>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="py-2 flex justify-center">
                {this.state.open ? (
                  <button
                    className="p-2 text-center text-gray-700"
                    onClick={() => this.toggleOpen()}
                  >
                    <MdArrowBackIos />
                  </button>
                ) : (
                  <button
                    className="p-2 rounded-md  text-gray-700"
                    onClick={() => this.toggleOpen()}
                  >
                    <MdArrowForwardIos />
                  </button>
                )}
              </div>
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
                    <i className="hover:text-primary-200 transition-colors duration-200">
                      {val.icon}
                    </i>
                    <span>{val.name}</span>
                  </a>
                );
              })}

              <a href="/" className="flex space-x-8 items-center mt-auto">
                <i className="hover:text-primary-200 transition-colors duration-200">
                  <MdAccountCircle className="text-2xl" />
                </i>
                <span>Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
