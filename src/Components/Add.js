import React from "react";
import {useState} from "react";
import "./style.css";
import Input from "./Input";
import {useLocation, useHistory} from "react-router-dom";

//reusing add and update component
export const Add = ({addData, onUpdate}) => {
  const location = useLocation();
  // to navigate between the pages
  const history = useHistory();
  let {name, addr, phone, roll, type} = location.state;
  let [data1, setData] = useState({
    name: name,
    addr: addr,
    phone: phone,
    roll: roll,
  });

  const submit = (e) => {
    e.preventDefault();
    if (type === "add") {
      if (data1.name === null || data1.roll === null) {
        prompt("Please enter data");
        return;
      } else addData(data1);
    } else onUpdate(data1);
    //   once inserted/updated should redirect to the show page to verify the objective
    history.push("/show");
  };

  return (
    <div className="div1">
      <form onSubmit={submit} id="form1" className="form">
        <h1>{type === "add" ? "New Student" : "Update "}</h1>
        {/* reusing components */}
        <Input
          name="name"
          label="Name"
          id="name"
          required
          type="text"
          value={data1.name}
          onChange={(e) => setData({...data1, name: e})}
        />
        <Input
          name="roll"
          id="roll"
          label="Roll No"
          required
          type="number"
          value={data1.roll}
          onChange={(e) => setData({...data1, roll: e})}
          min="181105000"
          max="181105099"
        />
        <Input
          name="addr"
          id="addr"
          label="Address"
          required
          type="text"
          value={data1.addr}
          onChange={(e) => setData({...data1, addr: e})}
        />
        <Input
          name="phone"
          id="phone"
          label="Phone no"
          required
          type="number"
          maxLength="10"
          value={data1.phone}
          onChange={(e) => setData({...data1, phone: e})}
        />
        <button type="submit" className="en-up">
          {type === "add" ? "Add" : "Update "}
        </button>
      </form>
    </div>
  );
};
