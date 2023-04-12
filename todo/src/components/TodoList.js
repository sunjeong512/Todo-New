import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import TodoItem from './TodoItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
}
