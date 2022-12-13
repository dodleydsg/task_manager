import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const Table = (props) => {
  const [malein] = useState(() => "malina");
  const sortTasks = (key, reverse) => {
    const compareFn = (a, b) => {
      if (a[key] > b[key]) {
        return 1;
      } else if (a[key] < b[key]) {
        return -1;
      } else return 0;
    };
    const sortable = Array(...props.tasks).sort(compareFn);
    props.setTasks(sortable);
  };
  return (
    <div className="w-full px-4">
      <table className="striped w-full text-sm text-left overflow-scroll">
        <thead className=" bg-gray-100 border-b-2 ">
          <tr className="uppercase">
            <th>
              <div className="flex items-center space-x-2 justify-start">
                <span>{malein}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => sortTasks("task")}
                >
                  <MdArrowDropDown className="text-2xl" />
                </span>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2 justify-start">
                <span>Category</span>
                <span>
                  <MdArrowDropDown className="text-2xl cursor-pointer" />
                </span>
              </div>
            </th>
            <th>
              <div className="flex items-center space-x-2 justify-start">
                <span>Date</span>
                <span>
                  <MdArrowDropDown className="text-2xl" />
                </span>
              </div>
            </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((i) => {
            return (
              <tr key={i.id}>
                <td>{i.task} </td>
                <td>{i.category}</td>
                <td>{i.date}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
