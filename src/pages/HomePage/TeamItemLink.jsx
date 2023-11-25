import React from "react";
import { NavLink } from "react-router-dom";

const TeamItemLink = (props) => {
  return (
    <li>
      <NavLink to="#">
        <i class={`fa-brands ${props.sosial}`}></i>
      </NavLink>
    </li>
  );
};

export default TeamItemLink;
