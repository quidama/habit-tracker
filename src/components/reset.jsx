import React, { Component } from 'react';

class Reset extends Component {
  handleReset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <button className='habits-reset' onClick={this.handleReset}>
        Reset All
      </button>
    );
  }
}

export default Reset;
