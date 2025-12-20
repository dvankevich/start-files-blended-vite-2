import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.search.value.trim();
    if (!inputValue) {
      alert('Please enter a some text');
      return;
    }
    onSubmit(inputValue);

    evt.target.reset();
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </form>
    </>
  );
};

export default Form;
