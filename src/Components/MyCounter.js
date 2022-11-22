import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import "./MyCounter.css"
import EvenCounterDisplayer from './EvenCounterDisplayer';


export default class MyCounter extends Component {
        constructor(){
            super();
            this.state = {
                value: 0,
                value1:0, 
            }
        }

    evenClickCounter= ()=>{
        if(this.state.value %2 ==0){
            
               this.state.value1 = this.state.value; 
            
    }
    return this.state.value1;
    }
    allClicksCounter =()=>{
      
        this.setState(()=>{
          this.evenClickCounter();    
             return {
                value: this.state.value + 1,
                
                      
             }
            
        })
    }   

    
     
    
    
  render() {
    // if(this.state.value % 2==0){
    //     this.state.value1 = this.state.value;
    // }
    this.evenClickCounter();
    return (
        <>
      <button onClick={this.allClicksCounter} >Count</button>
      <CounterDisplayer count={"All clicks counter: " + this.state.value}/><br></br>
      <EvenCounterDisplayer evenCounter={"Even Clicks Counter: " + this.state.value1}/>
      </>
    )
  }
}
