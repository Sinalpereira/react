import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  //----------------------------------RENDER-------------------------------///
  render() {
  //---------------------Destructuring Object----------------------//
  const {onReset,onIncrement,onDelete,onDecrement,counter}=this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          RESET
        </button>
        {counter.map(count => (
          <Counter
            key={count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            count={count}
          >
            <h4 className="title">The Counter Number is : {count.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}
  
export default Counters;
