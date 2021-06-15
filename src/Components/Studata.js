import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

export const Studata = ({item, onDelete}) => {
  return (
    <tr className="thead">
      <td>{item.name}</td>
      <td>{item.roll}</td>
      <td>{item.addr}</td>
      <td>{item.phone}</td>
      <Link
        to={{
          pathname: "/add",
          state: {
            name: item.name,
            addr: item.addr,
            phone: item.phone,
            roll: item.roll,
            type: "update",
          },
        }}
      >
        <td>
          <button className="btn" style={{backgroundColor: "green"}}>
            Update
          </button>
        </td>
      </Link>
      <td>
        <button className="btn" onClick={() => onDelete(item)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
