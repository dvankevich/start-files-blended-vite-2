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
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    if (findTodo(inputValue)) {
      alert(`This todo "${inputValue}" already exists!`);
      return;
    }
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), text: inputValue }]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const handleEditTodo = editTodo => {
    setCurrentTodo(editTodo);
    setIsEditing(true);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = text => {
    if (findTodo(text)) {
      alert(`This todo "${text}" already exists!`);
      return;
    }
    setTodos(
      todos.map(todo =>
        todo.id === currentTodo.id ? { ...currentTodo, text } : todo
      )
    );
    cancelUpdate();
  };

  const findTodo = text => {
    return todos.find(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}

      <TodoList
        todoList={todos}
        deleteTodo={deleteTodo}
        handleEditTodo={handleEditTodo}
        isEditing={isEditing}
      />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
