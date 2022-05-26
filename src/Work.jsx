// this is Pure component
import React, { PureComponent } from 'react'
export default class Work extends PureComponent {
    constructor(){
        super();
        this.state={
           data:10
        }

    }
  render() {
    return (
      <>
      {console.log(this.state)}
      <h1>Pure Component {this.state.data}</h1>
      <button onClick={()=>{this.setState({data:10})}}> pure Componet Update Data</button>
      </>
    )
  }
}



// This is higher order Function