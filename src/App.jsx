/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/cardList.component";
import Scroll from "./Components/scroll.component";
import SearchBox from "./Components/searchBox.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        {this.state.robots.length === 0 ? (
          <h1>Loading</h1>
        ) : (
          <>
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
            
          </>
        )}
        ;
      </div>
    );
  }
}

export default App;
