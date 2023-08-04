 import React from "react"
const Card = (props) => {
    return (
      <div className='container-card'>
          
          <div className='card-left'>
              <div className='card-id'> ID: {props.id}</div>
              <div className='picture-header'><img src={props.img}></img></div>
              <div className='card-bottom'>Exp: {props.exp}</div>
          </div> 
          <div className='card-right'>
              <div className='card-name'>{props.name}</div>
              <div className='card-role'>Role: <span>{props.position}</span> </div>
              <div className='card-salarie'>Salarie: <span>${props.salarie}</span></div>
              <div className='card-bio'>Bio: <span>{props.bio}</span></div>
          </div> 
      </div>
    )
  }
  
  export default Card