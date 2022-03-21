import React, { useState, useCallback } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    const _habits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    setHabits(_habits);
  });

  const handleDecrement = useCallback((habit) => {
    const _habits = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    setHabits(_habits);
  });

  const handleDelete = useCallback((habit) => {
    const _habits = habits.filter((item) => item.id !== habit.id);
    setHabits(_habits);
  });

  const handleAdd = useCallback((name) => {
    const _habits = [...habits, { id: Date.now(), name, count: 0 }];
    setHabits(_habits);
  });

  const handleReset = useCallback(() => {
    const _habits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    setHabits(_habits);
  });

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
