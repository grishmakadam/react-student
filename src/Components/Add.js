import React from 'react'
import {useState} from 'react'
import './style.css'

export const Add = ({addData}) => {

    let [data1,setData]=useState({
        name:'',
        addr:'',
        phone:'',
        roll:'',
    })

    const submit=(e)=>{
        e.preventDefault();
        if(data1.name===null || data1.roll===null){
            prompt("Please enter data");
            return;
        }
        else{
        addData(data1);}
    }



    return (
        <div className="div1">
            <form onSubmit={submit} id='form1' className="form">
                <h1>New Student</h1>
                <div className="input1">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={data1.name} onChange={(e)=>setData({...data1,name:e.target.value})} required />
                </div>
                
                <div className="input1">
                <label htmlFor="roll">Roll No.</label>
                <input type="number" name="roll" id="roll" value={data1.roll} onChange={(e)=>setData({...data1,roll:e.target.value})}  min="181105000" max="181105099" required/>
                </div>

                <div className="input1">
                <label htmlFor="addr">Address</label>
                <input type="text" name="addr" id="addr" value={data1.addr} onChange={(e)=>setData({...data1,addr:e.target.value})} required/>
                </div>

                <div className="input1">
                <label htmlFor="phone">Phone No.</label>
                <input type="number" name="phone" id="phone" maxLength='10' value={data1.phone} onChange={(e)=>setData({...data1,phone:e.target.value})}  required/>
                </div>

                <button type="submit" className="en-up">Enter</button>
            </form>
        </div>
    )
}
