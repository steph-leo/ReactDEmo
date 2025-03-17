import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Stephs"
      };
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: "Steph's"
            });
        }, 2000);
    }
  render() {
    console.log("Parent Component");
    return (
      <div>
        This is parent component
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> 
      </div>
    )
  }
}

export default ParentComp