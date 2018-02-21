import React, { Component } from 'react';
import './index.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      enterAndLeave: {
        color: 'black'
      },
      text: 'You have not clicked me',
    }
  }
    handleMouseEnter() {
      const shallowCopy = {...this.state.enterAndLeave}
      shallowCopy.color = 'white'
      this.setState({enterAndLeave: shallowCopy})
    }
    handleMouseLeave() {
      const shallowCopy = {...this.state.enterAndLeave}
      shallowCopy.color = 'black'
      this.setState({enterAndLeave: shallowCopy})
    }
    handleClick() {
      if (this.state.text === 'You have not clicked me' || this.state.text === 'You unclicked me!') {
        this.setState({text: 'You clicked me!'})
      } else {
        this.setState({text: 'You unclicked me!'})
      }
    }

  render() {
    return(<React.Fragment>
      <div className='grid'>

        <div className='button'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          >
          <p style={this.state.enterAndLeave}>
            {this.state.text}
          </p>
        </div>
      </div>
    </React.Fragment>)
  }
}
