import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TodoItem(props) {
  const { todo, index, removeTodo, completeTodo, editTodo } = props;
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(todo.text);
  const [date, setDate] = React.useState(new Date(todo.date));

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(index, text, date);
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleTextChange} />
          <DatePicker selected={date} onChange={handleDateChange} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <span
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          >
            {todo.text}
          </span>
          <span>{` (due on ${todo.date}) `}</span>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;

