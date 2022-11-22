import React, { Component } from 'react'


export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        {/* {console.log(this.props.count)} */}
      </div>
    )
  }
}
