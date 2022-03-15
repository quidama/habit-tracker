import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={() => this.props.onIncrement(habit)}
            onDecrement={() => this.props.onDecrement(habit)}
            onDelete={() => this.props.onDelete(habit)}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
