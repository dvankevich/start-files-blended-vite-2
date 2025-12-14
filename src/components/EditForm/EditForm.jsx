import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, defaultValue }) => {
  console.log('defaultValue: ', defaultValue.text);

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = defaultValue.text;
    if (!inputValue.trim()) {
      alert('Please enter a some text');
      return;
    }
    updateTodo(inputValue);

    evt.target.reset();
  };

  const handleCancel = () => {
    cancelUpdate();
  };

  return (
    <form className={style.form}>
      <button
        className={style.submitButton}
        type="submit"
        onSubmit={handleSubmit}
      >
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={defaultValue}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
