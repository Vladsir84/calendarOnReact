/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class RedLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: new Date().getMinutes - 4,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const marginTop = new Date().getMinutes() - 4

      this.setState({
        minutes: marginTop,
      })

    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

render() {
    const { minutes } = this.state;
    return (
      <div className="redLine" style={{ marginTop: `${minutes}px` }}>
        <div className="redLine-round"></div>
        <div className="redLine-line"></div>
      </div >
    )
  }
}

export default RedLine;