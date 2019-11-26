import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "bootstarp/dist/css/bootstarp.css";
import { Message } from "./Message";
import { List } from "./List";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("Render App Component");
    return (
      <div className="container text-white">
        <div className="row p-2">
          <div className="col-6">
            <Message
              message={`Counter: ${this.state.counter}`}
              callback={this.incrementCounter}
              text="Increment Counter"
            />
          </div>
          <div className="col-6">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
