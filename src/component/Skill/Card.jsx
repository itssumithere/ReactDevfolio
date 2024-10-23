import React from 'react'

function Card(props) {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{props.title}</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">{props.title} project : {props.pno}</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
