import React from 'react'

const Button = (props) => {
  return (
    <>
        <button  className={`${props.className} allBtn`}>{props.name}</button>
    </>
  )
}

export default Button