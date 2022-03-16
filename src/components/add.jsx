import React, { Component } from 'react';

class Add extends Component {
  state = {
    input: '',
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state.input);
    this.setState({ input: '' });
  };
  render() {
    return (
      <form className='add-form' onSubmit={this.onSubmit}>
        <input
          value={this.state.input}
          type='text'
          className='add-input'
          placeholder='Habit'
          onChange={this.handleInputChange}
        />
        <button type='submit' className='add-button'>
          Add
        </button>
      </form>
    );
  }
}

export default Add;
