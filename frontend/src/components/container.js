import Sidebar from "./sidebar";
import { Topbar } from "./topbar";
import { useState, useEffect } from "react";
import Table from "./table";

export const Container = ({ children }) => {
  const [open, toggleOpen] = useState(false); // state for sidebar
  const [tasks, setTasks] = useState([
    { task: "Start video call", category: "urgent", date: "" },
  ]);

  return (
    <>
      <Sidebar open={open} toggleOpen={() => toggleOpen(!open)} />
      <div className="w-full">
        <Topbar toggleOpen={() => toggleOpen(!open)} />
        {/* <Table tasks={tasks} setTasks={() => setTasks()} /> */}
        {children}
      </div>
    </>
  );
};
