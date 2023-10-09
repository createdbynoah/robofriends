import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchInput from './components/SearchInput';
import ScrollContent from './components/ScrollContent';

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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc" id="App">
        <header className="nav-bg">
          <h1 className="title">RoboFriends</h1>
          <SearchInput searchChange={this.onSearchChange} />
        </header>
        <main>
          <ScrollContent>
            <CardList robots={filteredRobots} />
          </ScrollContent>
        </main>
      </div>
    );
  }
}

export default App;
