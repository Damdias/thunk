import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <h2>Counter {this.props.counter.counter}</h2>
          <div>
            <button onClick={()=> this.props.add()}>Add</button>
            <button onClick={()=> this.props.sub()} >Sub</button>
          </div>
        </div>
      </div>
    );
  }
}
let maptoProps = (state)=>{
  return {
    counter: state.counter
  }
}
let mapToAction = (dispatch)=>{
  return {
    add : ()=> dispatch({type:'ADD'}),
    sub : ()=> dispatch({type:'REDUCE'}),
    
  }
}

export default connect(maptoProps,mapToAction)(App);
