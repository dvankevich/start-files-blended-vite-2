import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList }) => {
  return (
    <Grid>
      {todoList.map(todoItem => (
        <GridItem key={todoItem.id}>
          <TodoListItem todoItem={todoItem} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
