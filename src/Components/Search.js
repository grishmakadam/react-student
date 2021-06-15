import React, {useState} from "react";
import Input from "./Input";
import {Stutable} from "./Stutable";

export const Search = ({search, onDelete}) => {
  let [roll, setRoll] = useState("");
  let [sdata, setSdata] = useState([]);

  let submit = (e) => {
    e.preventDefault();
    setSdata(search(roll));
  };

  let onDeletes = (k) => {
    setSdata(
      sdata.filter((item) => {
        return k !== item;
      })
    );
    onDelete(k);
  };

  return (
    <div className="div1">
      {/* reusing component */}
      <form action="" onSubmit={submit} className="form form1">
        <Input
          type="number"
          id="search"
          label="Enter Roll no."
          name="srch"
          value={roll}
          onChange={(e) => setRoll(e)}
          min="181105000"
          max="181105099"
          required
        />
        <button type="submit">Search</button>
      </form>
      <Stutable data={sdata} onDelete={onDeletes} />
    </div>
  );
};
