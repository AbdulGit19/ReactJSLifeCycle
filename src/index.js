import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";

//import { Message } from "./Message";
//import { List } from "./List";
//import { ExternalCounter } from "./ExternalCounter";

import { DirectionDisplay } from "./DirectionDisplay";

export class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   counterLeft: 0,
    //   counterRight: 0
    // };

    this.state = {
      counter: 100
    };
  }

  changeCounter = val => {
    this.setState({ counter: this.state.counter + val });
  };

  render() {
    console.log("Render App Component");
    return (
      <div className="container text-center">
        <DirectionDisplay value={this.state.counter} />
        <div className="text-center">
          <button
            className="btn btn-primary m-1"
            onClick={() => this.changeCounter(-1)}
          >
            Decrease
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => this.changeCounter(1)}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }

  // incrementCounter = counter => {
  //   if (counter == "left") {
  //     this.setState({ counterLeft: this.state.counterLeft + 1 });
  //   } else {
  //     this.setState({ counterRight: this.state.counterRight + 1 });
  //   }
  // };

  // handleChange = () => {
  //   this.setState({ showMessage: !this.state.showMessage });
  // };

  //   render() {
  //     console.log("Render App Component");
  //     return (
  //       <div className="container text-center">
  //         <div className="row p-2">
  //           <div className="col-6">
  //             <Message
  //               message={`Left: ${this.state.counterLeft}`}
  //               callback={() => this.incrementCounter("left")}
  //               text="Increment Left Counter"
  //             />
  //           </div>
  //           <div className="col-6">
  //             <Message
  //               message={`Right: ${this.state.counterRight}`}
  //               callback={() => this.incrementCounter("right")}
  //               text="Increment Right Counter"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
