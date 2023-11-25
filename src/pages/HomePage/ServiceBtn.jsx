import React from 'react'
import { NavLink } from "react-router-dom";

const ServiceBtn = (props) => {
  return (
    <NavLink to="/service" className="btn-transparent">
        <span className="text">{props.text}</span>
    </NavLink>
  )
}

export default ServiceBtn