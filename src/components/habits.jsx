import React, { Component } from 'react';
import Add from './add';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  handleReset = () => {
    this.props.onReset();
  };

  render() {
    return (
      <>
        <Add onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        {/* 재사용되지 않는 부분은 component로 만들지 않는 것이 좋다. */}
        <button className='habits-reset' onClick={this.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
