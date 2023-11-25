import React from "react";
import PricingItem from "./PricingItem";

const data =[
  {
    class:"",
    title:"Free",
    price:"29",
    subtitle:"USD Per Month",

  },
  {
    class:"active",
    title:"Business",
    price:"29",
    subtitle:"USD Per Month",

  },
  {
    class:"",
    title:"Advance",
    price:"29",
    subtitle:"USD Per Month",

  },
]

const PricingTable = () => {
  return (
    <div className="pricing-table pb-120 bg-color-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title d-flex flex-column align-items-center mb-25">
              <h2 className="title">Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map((item,index)=>{
                 return <PricingItem key={index} class={item.class} title={item.title}
                  subtitle={item.subtitle} price={item.price}  />
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
