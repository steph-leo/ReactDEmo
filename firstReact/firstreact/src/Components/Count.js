import React, { Component } from 'react'
import UpdatedComp  from './HighOrder';
export class Count extends Component {
    constructor(props){
        super(props);
    this.state ={
        count: 0    
    };
}
    increments = () => {
        this.setState({count: this.state.count + 1});
    };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.increments} >{this.props.name + " "}count {count} times </button>
      </div>
    )
  }
}

export default UpdatedComp(Count);