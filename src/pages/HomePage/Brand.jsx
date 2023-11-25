import React from 'react'
import BrandItem from './BrandItem'

const data =[
    {
        imgUrl:"images/brand-01.png",
    },
    {
        imgUrl:"images/brand-02.png",
    },
    {
        imgUrl:"images/brand-03.png",
    },
    {
        imgUrl:"images/brand-04.png",
    },
    {
        imgUrl:"images/brand-05.png",
    },
    {
        imgUrl:"images/brand-06.png",
    },
]

const Brand = () => {
  return (
    <div className='brand-area pb-120'>
        <div className="container">
            <div className="row">
                {
                    data.map((item,index)=>{
                        return  <BrandItem key={index}
                        imgUrl={item.imgUrl} />
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default Brand