import React from "react";
import TeamItemLink from "./TeamItemLink";

const data = [
  {
    sosial: "fa-facebook-f",
  },
  {
    sosial: "fa-linkedin-in",
  },
  {
    sosial: "fa-twitter",
  },
];

const TeamItem = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt-30">
      <div className="team-static">
        <div className="img">
          <img className="w-100" src={props.imgUrl} alt="" />
        </div>
        <div className="inner">
          <div className="content d-flex flex-column align-items-start">
            <h4 className="title">{props.title}</h4>
            <p className="designation">{props.designation}</p>
          </div>
          <ul className="sosial-transparent list-unstyled d-flex">
            
              {data.map((item, index) => {
                return <TeamItemLink key={index} sosial={item.sosial} />;
              })}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamItem;
