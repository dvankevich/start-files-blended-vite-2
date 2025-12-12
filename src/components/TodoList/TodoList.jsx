import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todoList }) => {
  return (
    <Grid>
      {todoList.map((todoItem, index) => (
        <GridItem key={todoItem.id}>
          <TodoListItem todoItem={todoItem} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
