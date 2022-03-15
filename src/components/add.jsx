import React, { Component } from 'react';

class Add extends Component {
  render() {
    return (
      <form className='add-form'>
        <input type='text' className='add-input' placeholder='Habit' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default Add;
