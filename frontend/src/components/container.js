import Sidebar from "./sidebar";
import { Topbar } from "./topbar";
import { useState } from "react";

export const Container = ({ children }) => {
  const [open, toggleOpen] = useState(false);
  return (
    <>
      <Sidebar open={open} toggleOpen={() => toggleOpen(!open)} />
      <div>
        <Topbar toggleOpen={() => toggleOpen(!open)} />
        {children}
      </div>
    </>
  );
};
