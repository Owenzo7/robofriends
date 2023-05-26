/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./Components/cardList.component";
import Scroll from "./Components/scroll.component";
import SearchBox from "./Components/searchBox.component";
import Errorboundary from "./Components/errorBoundary";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      {robots.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <Errorboundary>
              <CardList robots={filteredRobots} />
            </Errorboundary>
          </Scroll>
        </>
      )}
      ;
    </div>
  );
}

export default App;
