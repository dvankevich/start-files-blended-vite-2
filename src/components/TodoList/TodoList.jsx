import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList, deleteTodo, handleEditTodo }) => {
  return (
    <Grid>
      {todoList.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            todoItem={todoItem}
            index={index}
            deleteTodo={deleteTodo}
            handleEditTodo={handleEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
