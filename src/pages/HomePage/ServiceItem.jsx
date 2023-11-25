import React from 'react'
import { NavLink } from 'react-router-dom'
import ServiceBtn from './ServiceBtn'

const ServiceItem = (props) => {
  return (
    <div className='col-lg-4 col-md-4 col-12 mt-30'>
        <div className="boxImg">
            <img src={props.imgUrl} alt="" />
        </div>
        <div className="content">
            <h3>
                <NavLink to="/service">
                {props.title}
                </NavLink>
            </h3>
            <p>{props.desc}</p>
            <ServiceBtn text="Read More"/>
        </div>
    </div>
  )
}

export default ServiceItem