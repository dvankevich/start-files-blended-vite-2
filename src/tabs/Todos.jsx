import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import todosInit from '../todosInit.json';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(window.localStorage.getItem('todos')) ?? todosInit;
  });

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text: inputValue }]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todoList={todos} deleteTodo={deleteTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
