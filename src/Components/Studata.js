import React from 'react'
import './style.css'
import {Update} from './Update'
import {Link} from 'react-router-dom'

export const Studata = ({item,onDelete}) => {
    
   
    
    return (
        <div className="thead">
                <li>{item.name}</li>
                <li>{item.roll}</li>
                <li>{item.addr}</li>
                <li>{item.phone}</li>
               <Link to={{pathname:'/update', state:{name:item.name,addr:item.addr,phone:item.phone,roll:item.roll}}}><li><button className="btn" style={{backgroundColor:'green'}}>Update</button></li></Link>
               <li><button className="btn" onClick={()=>onDelete(item)}>Delete</button></li>
            
        </div>
    )
}

