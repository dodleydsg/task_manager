import React from "react";
import { MdMenu } from "react-icons/md";
import { MdNotifications } from "react-icons/md";

export const Topbar = (props) => {
  return (
    <div className="px-4 bg-gray-100 w-full h-18 py-6 flex items-center justify-between">
      <div className="space-x-4 flex items-center">
        <button
          className="p-2 sm:hidden rounded-lg text-gray-700 hover:bg-gray-300 bg-gray-200 transition duration-400"
          onClick={() => props.toggleOpen()}
        >
          <MdMenu className="text-2xl text-gray-700" />
        </button>
        <h1 className="font-bold uppercase text-xl text-primary-200">Tasky</h1>
        <h2 className="font-light text-lg text-gray-600 hidden sm:block">
          {new Date(Date.now()).toLocaleDateString("en-EN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </div>
      <div className="flex space-x-4 items-center">
        <i className="text-2xl text-gray-700">
          <MdNotifications />
        </i>
        <div className="h-8 w-8 cursor-pointer rounded-[50px] bg-red-400"></div>
      </div>
    </div>
  );
};
