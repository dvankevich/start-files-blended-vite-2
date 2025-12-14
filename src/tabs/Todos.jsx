import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList/TodoList';
import todosInit from '../todosInit.json';
import { nanoid } from 'nanoid';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(window.localStorage.getItem('todos')) ?? todosInit;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    console.log('currentTodo changed: ', currentTodo);
  }, [currentTodo]);

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

  const editTodo = todo => {
    console.log('edit todo: ', todo);
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  };

  const cancelUpdate = () => {
    console.log('cancel Update');

    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = e => {
    e.preventDefault();
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === currentTodo.id ? currentTodo : todo))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      <TodoList todoList={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
