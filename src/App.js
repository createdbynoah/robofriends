import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchInput from './components/SearchInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <header>
          <h1 className="f-headline lh-solid">RoboFriends</h1>
          <SearchInput searchChange={this.onSearchChange} />
        </header>
        <main>
          <CardList robots={filteredRobots} />
        </main>
      </div>
    );
  }
}

export default App;
