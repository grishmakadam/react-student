import React from "react";
import {Studata} from "./Studata.js";
import "./style.css";
import {Scrollbars} from "react-custom-scrollbars";
import head from "../data/tableHeader";

export const Stutable = ({data, onDelete, sendData}) => {
  let m = () => {
    if (data.length !== 0) return true;
    else return false;
  };

  return (
    <table className="container">
      <thead className="thead thead-d">
        {/* Again not sure why li tab was used when it is a table. Would be better to use td,th,tr */}
        <th>{head.name}</th>
        <th>{head.roll}</th>
        <th>{head.addr}</th>
        <th>{head.phone}</th>
        {/*i didnt understand y the two lis were needed  */}
        {/* <li></li>
               <li></li> */}
      </thead>

      {m() ? (
        <Scrollbars style={{height: "60vh"}}>
          {/* adding keys is important it helps the virtual dom to rerender only what is changed */}
          {data.map((item, i) => {
            return (
              <Studata
                item={item}
                onDelete={onDelete}
                sendData={sendData}
                key={i}
              />
            );
          })}
        </Scrollbars>
      ) : (
        <div class="thead">No data to show</div>
      )}
    </table>
  );
};
