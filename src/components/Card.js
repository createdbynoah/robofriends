import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div id="card" className="dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id + 50}?200x200`} alt="" />
      <h2>{name}</h2>
      <p className="">{email}</p>
    </div>
  );
};

export default Card;
