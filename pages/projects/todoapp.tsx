import React, { useState } from 'react';
import styles from '@/styles/todo.module.css'; // Import the CSS module

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [finishedTodos, setFinishedTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const deletedTodo = todos[index];
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setFinishedTodos([...finishedTodos, deletedTodo]);
  };

  return (

    <div className={styles.description}>
      <h1>Description</h1>
      <p>This is a simple Todo app. Where you can add and delete elements and after you finished it it's giving back the closed Todo's</p>
      <p>At the bottom of the page there willbe some snippets of the code.</p>
    <div className={styles.todoContainer}>
      <h1>Todo List</h1>
      <div className={styles.todoForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.todoInput}
        />
        <button onClick={handleAddTodo} className={styles.todoButton}>
          Add
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Finish</button>
          </li>
        ))}
      </ul>
      <div className={styles.finishedContainer}>
        <h2>Finished Todos</h2>
        <ul className={styles.finishedList}>
          {finishedTodos.map((todo, index) => (
            <li key={index} className={styles.finishedItem}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
