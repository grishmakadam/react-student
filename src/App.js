import "./App.css";
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar.js";
import {Stutable} from "./Components/Stutable";
import {useState} from "react";
import {Add} from "./Components/Add";
import {Search} from "./Components/Search";
import "./Components/style.css";
import AppData from "./data/AppData";
import updatedata from "./functions/updateData";
import deletedata from "./functions/deleteData";
import adddatafn from "./functions/addData";
import searchData from "./functions/searchData";

function App() {
  const onUpdate = (k) => {
    updatedata(data, setData, k);
  };

  const onDelete = (item) => {
    deletedata(data, setData, item);
  };

  const addData = (data1) => {
    adddatafn(data, setData, data1);
  };

  const search = (roll) => {
    return searchData(data, roll);
  };

  let [data, setData] = useState(AppData);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/add">
          <Add addData={addData} onUpdate={onUpdate} />
        </Route>
        <Route path="/search">
          <Search search={search} onDelete={onDelete} />
        </Route>
        <Route path="/show">
          <Stutable data={data} onDelete={onDelete} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
