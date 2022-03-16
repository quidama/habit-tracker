import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleAdd = (name) => {
    const id = Math.floor(Math.random() * 1000);
    const habit = { id: id, name: name, count: 0 };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit !== 0) {
        return { ...habit, count: 0 };
      } else {
        return habit;
      }
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          habitCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <div className='habits'>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
          />
        </div>
      </>
    );
  }
}

export default App;
