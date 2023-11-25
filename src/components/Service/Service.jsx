import React from 'react'
import "./service.css"

const Service = (props) => {
  return (
    <div className={props.col}>
        <div className="service d-flex flex-column align-items-center">
            <div className="icon">
            <i class={props.icon}></i>
            </div>
            <div className="content d-flex flex-column align-items-center ">
                <h3 className='title'>{props.title}</h3>
                <p className='description'>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Service