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
    const habit = { id: Date.now(), name: name, count: 0 };
    const habits = [...this.state.habits, habit];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    //! 오브젝트 안의 값을 바꾸는 것은 shallow compare 시 오브젝트가
    //! 변경되지 않아 변동이 없는 것으로 간주되어 reder를 호출하지 않는다.
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    //! 새로운 오브젝트를 만들어 값을 변경하면 reder가 호출된다.
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    //! 오브젝트 안의 값을 바꾸는 것은 shallow compare 시 오브젝트가
    //! 변경되지 않아 변동이 없는 것으로 간주되어 reder를 호출하지 않는다.
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    //! 새로운 오브젝트를 만들어 값을 변경하면 reder가 호출된다.
    const habits = this.state.habits.map((item) => {
      if (habit.count !== 0 && item.id === habit.id) {
        return { ...habit, count: habit.count - 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
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
          habitCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
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
