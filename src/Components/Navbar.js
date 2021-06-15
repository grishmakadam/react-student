import React from "react";
import "./style.css";
import {NavLink} from "react-router-dom";
import routingData from "../data/routingData";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        {
          // reusing component
          routingData.map((route, i) => {
            return (
              <li key={i}>
                <NavLink to={route.page} activeClassName="li">
                  {route.title}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};
