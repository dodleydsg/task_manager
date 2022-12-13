import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdNotifications, MdSearch, MdAdd } from "react-icons/md";

export const Topbar = (props) => {
  const [mobileButton, toggleButton] = useState(false);
  return (
    <div className="w-full">
      <div className="px-4 bg-gray-100 mb-4 w-full h-18 py-6 flex items-center justify-between">
        <div className="space-x-2 flex items-center">
          <button
            className="p-2 sm:hidden rounded-lg text-gray-700 hover:bg-gray-300 bg-gray-200 transition duration-400"
            onClick={() => props.toggleOpen()}
          >
            <MdMenu className="text-2xl text-gray-700" />
          </button>
          <h1 className="font-bold text-xl text-primary-200">Dashboard</h1>
        </div>
        <div className="space-x-2 hidden lg:flex items-center">
          <button className="text-white bg-primary-200 rounded-lg hover:bg-primary-300 transition text-medium duration-300 py-4 px-6">
            Add Task
          </button>
          <button className="text-white text-primary-200 rounded-lg hover:text-primary-300 transition text-medium duration-300 py-4 px-6">
            Add Category
          </button>
          <form>
            <div className="relative">
              <label className="sr-only">Search tasks</label>
              <input
                placeholder="Search tasks"
                className="py-4 px-4 outline-primary-200 rounded-lg ring-gray-200 ring-offset-2 ring-2"
              />
              <MdSearch className="absolute cursor-pointer text-gray-500 text-2xl top-[18px] right-3 hover:scale-110 hover:text-primary-100 transtion  duration-300" />
            </div>
          </form>
        </div>
        <div className="flex space-x-2 items-center">
          <i className="text-2xl text-gray-700">
            <MdNotifications />
          </i>
          <div className="h-8 w-8 cursor-pointer rounded-[50px] bg-red-400"></div>
        </div>
      </div>
      <div className="w-full relative  px-4 lg:hidden flex space-x-2 items-center justify-between">
        <button
          className="text-white bg-primary-200 rounded-lg hover:bg-primary-300 transition text-medium duration-300 p-4"
          onClick={() => toggleButton(!mobileButton)}
        >
          <MdAdd />
        </button>
        <div
          className={
            mobileButton
              ? "rounded-lg flex flex-col bg-white justify-center items-start absolute scale-y-100 transition duration-300 origin-top border left-2 top-full mt-2 space-y-px w-48"
              : "rounded-lg flex flex-col bg-white justify-center items-start scale-y-0 transition duration-300 origin-top  absolute border left-2 top-full mt-2 space-y-px w-48"
          }
        >
          <a
            href="#/"
            className="p-4 w-full hover:bg-gray-200 transition duration-300 text-primary-200 text-sm block"
          >
            Add Task
          </a>
          <a
            href="#/"
            className="p-4 w-full hover:bg-gray-200 transition duration-300 text-primary-200 text-sm block"
          >
            Add Category
          </a>
        </div>
        <form>
          <div className="relative">
            <label className="sr-only">Search tasks</label>
            <input
              placeholder="Search tasks"
              className="py-2 px-4 outline-primary-200 rounded-lg ring-gray-200 ring-offset-2 ring-2"
            />
            <MdSearch className="absolute cursor-pointer text-gray-500 text-2xl top-2 right-3 hover:scale-110 hover:text-primary-100 transtion  duration-300" />
          </div>
        </form>
      </div>
    </div>
  );
};
