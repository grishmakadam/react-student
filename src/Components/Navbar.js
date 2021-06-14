import React from 'react'
import './style.css'
import {Add} from './Add.js'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
   
    return (
        <div className="navbar">
            <ul>
                <li><NavLink to='/add' activeClassName="li" >Insert</NavLink></li>
                <li><NavLink to='/search' activeClassName='li'>Search</NavLink></li>
                {/* <NavLink to='/update' className='li'><li>Update</li></NavLink> */}
                <li><NavLink to='/show' activeClassName="li">Show All </NavLink></li>
            </ul>
        </div>
    )
}
