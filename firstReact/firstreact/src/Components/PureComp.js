import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Component");
    return (
      <div>
        This is a pure component {this.props.name}
      </div>
    )
  }
}

export default  PureComp;
