import React, { Component } from "react";

class Counter extends Component {
  // state={
  //  value : this.props.count.value,
  // };
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  // }  
  render() {
    const isDisabled=this.props.count.value===0;
    return (
      <div>
        {this.props.children}

        {/* ----//Span tag---- */}
        <span style={this.styles} className={this.getBadgeMethod()}>
          {this.formatCounter()}
        </span>

        {/* Decrement  */}
        <button
         disabled={isDisabled}
          onClick={() => this.props.onDecrement(this.props.count)} 
          className="btn btn-small btn-danger m-2"
        >
          -
        </button>

        {/* Increment */}
        <button
          onClick={() => this.props.onIncrement(this.props.count)}
          className="btn btn-secondary btn-m-2"
        >
          +
        </button>

        {/* Delete */}
        <button
          onClick={() => this.props.onDelete(this.props.count.id)}
          className="btn btn-small btn-danger m-2"
        >
          x
        </button>
      </div>
    );
  }
  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.count.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    // const {count} = this.state;
    // return count === 0 ? "ZERO": count;
    return this.props.count.value;
  }
}
export default Counter;
