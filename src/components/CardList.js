import React from 'react';
import Card from './Card';
import { robots } from '../robots';

const CardList = () => {
  return (
    <div className="cards-container">
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
