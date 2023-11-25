import React from 'react'

const BrandItem = (props) => {
  return (
    <div className='col-6 col-sm-4 brandItem'>
        <img src={props.imgUrl} alt="" />
    </div>
  )
}

export default BrandItem