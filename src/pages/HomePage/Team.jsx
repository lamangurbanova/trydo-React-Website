import React from 'react'
import TeamItem from './TeamItem'

const teamData = [
    {
        imgUrl:"images/team-01.jpg",
        title:"Jone Due",
        designation:"Sr. Web Developer",
    },
    {
        imgUrl:"images/team-02.jpg",
        title:"Fatima Asrafi",
        designation:"Front-end Engineer",
    },
    {
        imgUrl:"images/team-03.jpg",
        title:"John Dou",
        designation:"Sr. Graphic Designer",
    },
    {
        imgUrl:"images/team-04.jpg",
        title:"John Dou",
        designation:"Sr. Web Developer",
    },
]

const Team = () => {
  return (
    <div className='team-area pb-120'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h2 className="title">
                        Managing Team
                        </h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
               
                    {
                        teamData.map((item,index)=>{
                            return <TeamItem key={index}
                             imgUrl={item.imgUrl}
                             title={item.title}
                             designation={item.designation} />
                        })
                    }
                
            </div>
        </div>
    </div>
  )
}

export default Team