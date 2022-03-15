import React, { Component } from 'react';
import Habits from './habits';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='navbar'>
          <i className='navbar-logo fas fa-leaf'></i>
          <span>Habit Tracker</span>
          <span className='navbar-count'>{this.props.runningHabitCount}</span>
        </nav>
      </>
    );
  }
}

export default Navbar;
