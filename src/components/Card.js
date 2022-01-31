import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  console.log(props.image)
  return(
   
       <div className="card w-100">
    <img src={props.image} 
         className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.cardTitle}</h5>
      <p className="card-text">{props.cardText}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  )

}
Card.defaultProps={
  cardTitle :"Default Props Title"
}
Card.propTypes ={                  //gelen veri tipini sinirlandiriyorz
  cardText:PropTypes.string.isRequired   //isRequared kesinlikle göndermen gerek diyo
} 