import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <label onHover={() => this.props.onBagtotal(this.props.counter)}>
          Price
        </label>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
