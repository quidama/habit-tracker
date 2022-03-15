import React, { Component } from 'react';

class Reset extends Component {
  handleResetAll = () => {
    this.props.onResetAll();
  };
  render() {
    return (
      <button className='habits-reset' onClick={this.handleResetAll}>
        Reset All
      </button>
    );
  }
}

export default Reset;
