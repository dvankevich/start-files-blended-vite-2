import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <Grid>
      {todoList.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem
            todoItem={todoItem}
            index={index}
            deleteTodo={deleteTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
