import React, { PureComponent } from 'react'

export default class SimpleComp extends PureComponent {
    constructor(){
        super();
        this.state = {
            count : 0,
            toggle : false
        }
    }

    
    render() {
        console.log("This is a Pure Component")
    const{count,toggle} = this.state
    let handleIncrement = ()=>{
        if (toggle){
            this.setState({count : count+1})
        }
        }
    return (
        <>

      <div>
        <h2>Pure Component</h2>
        <h3>{count}</h3>
        <button onClick={()=>{this.setState({toggle:!toggle})}}>Set Toggle</button>
        <button onClick={handleIncrement}>Counter</button>
      </div>

      </>
    )
  }
}
