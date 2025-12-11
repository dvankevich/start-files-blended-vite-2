//import Text from '../components/Text/Text';
import Form from '../components/Form/Form';

const Todos = () => {
  const addNewTodo = evt => {
    evt.preventDefault();
    console.log(evt.target.search.value); // має вивести значення інпуту під час сабміту форми
    evt.target.reset();
  };
  return (
    <>
      {/* <Text textAlign="center">There are no any todos ...</Text> */}
      <Form onSubmit={addNewTodo} />
    </>
  );
};

export default Todos;
