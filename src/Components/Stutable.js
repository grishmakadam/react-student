import React from 'react'
import {Studata} from './Studata.js'
import './style.css'
import { Scrollbars } from 'react-custom-scrollbars';


export const Stutable = ({data,onDelete,sendData}) => {

    let head={
        name:"NAME",
        roll:"ROLL NO",
        addr:"ADDRESS",
        phone:"PHONE",
    }

   let m=()=>{
       if(data.length!==0){
           return true;
       }
       else{
           return false;
       }
   }

    return (
        
        <div className="container">
           <div className="thead thead-d">
               <li>{head.name}</li>
               <li>{head.roll}</li>
               <li>{head.addr}</li>
               <li>{head.phone}</li>
               <li></li>
               <li></li>
           </div>

            {m()?
           <Scrollbars style={{height:'60vh'}}>
            {data.map((item)=>
            
                    {return <Studata item={item} onDelete={onDelete} sendData={sendData}/>}   
            )}
            </Scrollbars>:<div class='thead'>No data to show</div>}
        
        </div>
            
    )
}
