
import './App.css';
import {Route,Switch} from 'react-router-dom'
import {Navbar} from './Components/Navbar.js'
import {Stutable} from './Components/Stutable'
import {useState} from 'react'
import {Add} from './Components/Add'
import {Search} from './Components/Search'
import {Update} from './Components/Update'
import './Components/style.css'

function App() {
 
  const onUpdate=(k)=>{
    let m=data.findIndex((x)=>x.roll==k.roll)
    data[m]=k;
    setData([...data]);
  }
 
  const onDelete=(item)=>{
      setData(data.filter(k=>{return k!==item}))
  }

  const addData=(data1)=>{

    let pr=new Promise((resolve,reject)=>{
       let q=data.filter((item)=>{return item.roll==data1.roll});
        alert(q)
       if(q.length==0){
        resolve("Yes Available")

       }
       else{
        reject("already taken")
       }
    });

    pr.then((message)=>{
      let m={
        name:data1.name,
        addr:data1.addr,
        phone:data1.phone,
        roll:data1.roll,
      }
      setData([...data,m])
      alert(message+m.roll)
    }).catch((message)=>{
      alert(message);
    })
  }
 
  

  const search=(roll)=>{
    return data.filter((item)=>{return item.roll==roll});
  }

  let [data,setData]=useState([{
    name:"Grishma",
    roll:181105027,
    addr:"Margao",
    phone:73877
  },{
    name:"Gianna",
    roll:181105028,
    addr:"panaji",
    phone:73723
  }])

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/add' ><Add addData={addData} /></Route>
        <Route path='/search'><Search search={search} onDelete={onDelete} /></Route>
        <Route path='/update'><Update onUpdate={onUpdate} /></Route>
        <Route path='/show'><Stutable data={data} onDelete={onDelete}  /></Route>
      </Switch>
     
    </>
  );
}

export default App;
