import React, { useState } from "react";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((i) => {
          return (
            <tr key={1}>
              <td>{i.task}</td>
              <td>{i.category}</td>
              <td>{i.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
