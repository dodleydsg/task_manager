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

  collapseNav() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("collapseNav");
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div
        className="h-screen flex flex-col justify-items-start w-64 pl-6 py-6"
        id="sidebar"
      >
        <div className="min-w-12 flex space-x-4 align-center mb-10">
          <img src={Logo} alt="logo" />
          {this.state.open ? <span className="font-bold">TASKY</span> : <></>}
        </div>
        <div>
          {this.state.open ? (
            <MdArrowBackIos
              className="cursor-pointer"
              onClick={() => this.collapseNav()}
            />
          ) : (
            <MdArrowForwardIos
              className="cursor-pointer"
              onClick={() => this.collapseNav()}
            />
          )}
        </div>
        <div className="my-10">
          {/* Main Navigation */}
          <div className="flex flex-col space-y-4" id="sideNav">
            {this.LINKS.map((val, idx, arr) => {
              return (
                <a
                  className={
                    this.state.active === idx
                      ? "flex active items-center space-x-4"
                      : "flex  items-center space-x-4 hover:text-primary-300"
                  }
                  href={val.link}
                  key={idx}
                  onClick={() => this.setState({ active: idx })}
                >
                  <span className="w-6">{val.icon}</span>
                  {this.state.open ? <span>{val.name}</span> : <></>}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-auto bg-primary-100 hover:bg-primary-300 transition-colors duration-200 flex p-2 items-center h-12">
          <a href="/" className="flex min-w-full items-center space-x-4">
            <MdAccountCircle className="text-2xl text-white" />
            {this.state.open ? (
              <span className="text-white text-sm">Account Settings</span>
            ) : (
              <></>
            )}
          </a>
        </div>
      </div>
    );
  }
}
