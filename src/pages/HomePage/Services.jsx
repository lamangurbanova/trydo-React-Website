import React from 'react'
import ServiceBtn from './ServiceBtn'
import ServiceItem from './ServiceItem'


const serviceData =[
    {
        imgUrl:"images/corporate-01.jpg",
        title:"Thinking Development",
        desc:"I throw myself down among the tall grass by the stream"
    },
    {
        imgUrl:"images/corporate-02.jpg",
        title:"Business Consulting",
        desc:"I throw myself down among the tall grass by the stream"
    },
    {
        imgUrl:"images/corporate-03.jpg",
        title:"Biseness Development",
        desc:"I throw myself down among the tall grass by the stream"
    },
]

const Services = () => {
  return (
    <div className='service-area bg-color-5 pb-120'>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mt-30">
                    <div className="section-title">
                        <h2 className="title">
                        Services
                        </h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but.</p>
                        <div className="serviceBtn">
                        <ServiceBtn text="Request Custom Service"/>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        {
                            serviceData.map((service,index)=>{
                                return <ServiceItem key={index}
                                 imgUrl={service.imgUrl}
                                 title={service.title}
                                 desc={service.desc} />
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services