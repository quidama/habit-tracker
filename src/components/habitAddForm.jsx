import React, { memo, useCallback, useRef } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  });

  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Habit'
      />
      <button type='submit' className='add-button'>
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
