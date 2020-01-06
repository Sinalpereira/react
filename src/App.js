import React,{Component}from 'react';
import './App.css';
import Counters from './components/Counters';
import Navbar from './components/Navbar';


class App extends Component {
  state = {
    counts: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 }
    ]
  };
  
  //--------------------------------DELETE COUNTER------------------------///
  handleDelete = countId => {
    console.log("Event Handler Called", countId);
    const delCount = this.state.counts.filter(c => c.id !== countId);
    this.setState({
      counts: delCount
    },()=>{  
      //-----callback function will be executed only when a event occurs ----////
      console.log(this.state);
    });
  };


///------------------------------------INCREMENT COUNTER------------------------------///  
  handleIncrement=(counter)=>{
    const counts=[...this.state.counts]
    const index= counts.indexOf(counter);
   counts[index].value++;
  this.setState({
    counts
  });
  }

  ///----------------------DECREMENT COUNTER---------------------------///
  handleDecrement=(countId)=>{
    let count=[...this.state.counts];
    console.log(count);
    const index=count.indexOf(countId);
    count[index].value--;
    this.setState({
      counts:count,
    })
  }

  
  ////-----------------------------------RESET BUTTON-------------------------////
  resetButton = () => {
    const counter = this.state.counts.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  render() { 
    return (
      <div className ="App">
        <Navbar totalCounter={this.state.counts.length}//---{this.state.counts.length.filter(v=>v.value).length}
        ></Navbar>
        <Counters 
        counter ={this.state.counts}
        onReset={this.resetButton}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}></Counters>
       
      </div>
      );
  }
}
 

export default App;
