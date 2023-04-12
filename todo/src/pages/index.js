import { useState } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/todo.module.css';

const TodoItem = ({ todo, index, removeTodo }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>
        <span>{todo.text}</span>
        <DatePicker selected={date} onChange={handleDateChange} />
      </div>
      <button onClick={() => removeTodo(index)}>x</button>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue) {
      const newTodos = [...todos, { text: inputValue }];
      setTodos(newTodos);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List with Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Todo List with Calendar</h1>

        <div className={styles.todoForm}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className={styles.todoList}>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TodoList;

