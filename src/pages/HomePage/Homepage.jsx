import React from "react";
import Header from "../../components/Header/Header";
import MainSlider from "./MainSlider";
import Service from "../../components/Service/Service";
import Services from "./Services";
import SectionAbout from "./SectionAbout";
import CounterUp from "./CounterUp";
import Team from "./Team";
import MainAbout from "./MainAbout";
import Brand from "./Brand";
import PricingTable from "./PricingTable";
import Footer from "./Footer";



const serviceData =[
  {
    col:"col-12 col-md-6 col-sm-6 col-lg-4",
    icon:"fa-solid fa-cloud",
    title:"Business Stratagy",
    desc:"I throw myself down among the tall grass by the stream as I lie close to the earth"
  },
  {
    col:"col-12 col-md-6 col-sm-6 col-lg-4",
    icon:"fa-brands fa-slack",
    title:"Website Development",
    desc:"I throw myself down among the tall grass by the stream as I lie close to the earth"
  },
  {
    col:"col-12 col-md-6 col-sm-6 col-lg-4",
    icon:"fa-brands fa-docker",
    title:"Marketing & Reporting",
    desc:"I throw myself down among the tall grass by the stream as I lie close to the earth"
  },
]

const Homepage = () => {
  return (
    <div>
      <MainSlider />
      <div className="container pt-3">
        <div className="row">
          {
            serviceData.map((item,index)=>{
              return <Service key={index} 
              col={item.col}
                icon={item.icon}
                title={item.title}
                desc={item.desc} />
            })
          }
          
        </div>
      </div>
      <Services/>
      <CounterUp/>
      <SectionAbout/>
      <Team/>
      <MainAbout/>
      <Brand/>
      <PricingTable/>
      <Footer/>
    </div>
  );
};

export default Homepage;
