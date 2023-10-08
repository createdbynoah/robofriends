import React from 'react';
import './App.css';
import CardList from './components/CardList';

const App = () => {
  return (
    <div className="container">
      <h1 className="f-headline lh-solid">RoboFriends</h1>
      <CardList />
    </div>
  );
};

export default App;
