import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <h2 class="">{name}</h2>
      <p className="">{email}</p>
    </div>
  );
};

export default Card;
