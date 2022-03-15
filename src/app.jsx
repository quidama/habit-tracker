import { Component } from 'react';
import './app.css';
import Add from './components/add';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends Component {
  state = {
    runningHabitCount: 0,
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  // setRunningHabitCount = () => {
  //   const habits = this.state.habits.filter((item) => item.count !== 0);
  //   this.setState({ runningHabitCount: habits.length });
  // };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    const runningHabits = habits.filter((item) => item.count !== 0);
    this.setState({ habits, runningHabitCount: runningHabits.length });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    const runningHabits = habits.filter((item) => item.count !== 0);
    this.setState({ habits, runningHabitCount: runningHabits.length });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    const runningHabits = habits.filter((item) => item.count !== 0);
    this.setState({ habits, runningHabitCount: runningHabits.length });
  };

  handleResetAll = () => {
    const habits = [...this.state.habits];
    habits.map((item) => (item.count = 0));
    const runningHabits = habits.filter((item) => item.count !== 0);
    this.setState({ habits, runningHabitCount: runningHabits.length });
  };

  render() {
    return (
      <>
        <Navbar runningHabitCount={this.state.runningHabitCount} />
        <div className='habits'>
          <Add />
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <Reset onResetAll={this.handleResetAll} />
        </div>
      </>
    );
  }
}

export default App;
