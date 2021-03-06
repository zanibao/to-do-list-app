import React, { Component } from "react";

import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput (key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }

  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render(){
    return (
      <div className="App">
<div>
  <FontAwesomeIcon icon={faStar} className="fas" /> Super important 
  <br />
  <input
  type="text"
  placeholder="Get it done..."
  value={this.state.newItem}
  onChange={e => this.updateInput("newItem", e.target.value)}
  />
  <button onClick={() => this.addItem ()}>
    <FontAwesomeIcon icon={faPlus} className="fas" />
  </button>
  <br />
  <ul>
    {this.state.list.map(item => {
      return (
        <li key={item.id}>
          {item.value}
          <button onClick={() => this.deleteItem(item.id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="fas" />
          </button>
        </li>
      )
    })}
  </ul>
</div>
      </div>
    );
  }
} 

export default App;
