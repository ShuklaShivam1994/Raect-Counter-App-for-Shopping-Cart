import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import BagTotal from "./components/bagtotal";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, price: 10 },
      { id: 2, value: 0, price: 20 },
      { id: 3, value: 0, price: 30 },
      { id: 4, value: 0, price: 40 },
      { id: 5, value: 0, price: 50 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleBagtotal = () => {
    console.log("event called");
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
        <BagTotal
          totalBagCost={this.state.counters.map((c) => c.price > 0).length}
          onBagtotal={this.handleBagtotal}
        />
      </React.Fragment>
    );
  }
}

export default App;
