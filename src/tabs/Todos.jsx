import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useState } from 'react';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
    { id: '3', text: 'Work, Learn again and again' },
  ]);

  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todoList={todos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
