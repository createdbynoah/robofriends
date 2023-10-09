import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchInput from './components/SearchInput';
import ScrollContent from './components/ScrollContent';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  // useEffect with empty array as second argument is equivalent to componentDidMount
  // array arguments signal when useEffect should run based on changes to those values
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className="tc" id="App">
      <header className="nav-bg">
        <h1 className="title">RoboFriends</h1>
        <SearchInput searchChange={onSearchChange} />
      </header>
      <main>
        <ScrollContent>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </ScrollContent>
      </main>
    </div>
  );
};

export default App;
