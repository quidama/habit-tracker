import React, { memo, useCallback } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = memo((props) => {
  const { habits, onIncrement, onDecrement, onDelete, onAdd, onReset } = props;
  const handleIncrement = useCallback((habit) => {
    onIncrement(habit);
  });

  const handleDecrement = useCallback((habit) => {
    onDecrement(habit);
  });

  const handleDelete = useCallback((habit) => {
    onDelete(habit);
  });

  const handleAdd = useCallback((name) => {
    onAdd(name);
  });

  return (
    <div className='habits'>
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button className='habits-reset' onClick={onReset}>
        Reset All
      </button>
    </div>
  );
});

export default Habits;
