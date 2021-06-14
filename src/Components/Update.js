import React from 'react'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'

export const Update = ({onUpdate}) => {
    let location=useLocation();
    let {name,addr,phone,roll}=location.state;
    let [citem,setCitem]=useState({
        name:name,addr:addr,phone:phone,roll:roll,
    })

    const submit=(e)=>{
            e.preventDefault();
             onUpdate(citem);
    }



    return (
            <div className="div1">
                
            <form onSubmit={submit} className="form">
                 <div className="input1">
                <label htmlFor="roll">Roll No.</label>
                <input type="number" name="roll" id="roll" value={citem.roll}  disabled/>
                </div>


                <div className="input1">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={citem.name} onChange={(e)=>setCitem({...citem,name:e.target.value})} required/>
                </div>
                

                <div className="input1">
                <label htmlFor="addr">Address</label>
                <input type="text" name="addr" id="addr" value={citem.addr} onChange={(e)=>setCitem({...citem,addr:e.target.value})} required/>
                </div>

                <div className="input1">
                <label htmlFor="phone">Phone No.</label>
                <input type="number" name="phone" id="phone" maxLength='10' value={citem.phone} onChange={(e)=>setCitem({...citem,phone:e.target.value})}  required/>
                </div>

                <button type="submit" className="up-en">Update</button>
            </form>
        </div>
    )
}
