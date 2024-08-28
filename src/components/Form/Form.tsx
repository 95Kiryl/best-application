import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/slices/userSlice';
import { addUser } from '../../redux/slices/userDataSlice';
import { useAppDispatch } from '../../hooks';
import styles from './Form.module.css';

const Form: FC = () => {
  const [username, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    dispatch(setUser(username));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function fetchData() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${username}`
        );
        const userData = await res.json();

        if (userData.length === 0) {
          alert('Пользователь не найден');
        } else {
          dispatch(addUser(userData));
          navigate('/');
        }
      } catch (error) {
        setError('Что-то пошло не так...');
      }
    }
    fetchData();

    setUserName('');
  };

  return (
    <>
      {error ? (
        <h1 className={styles.title}>Что-то пошло не так...</h1>
      ) : (
        <div className={styles.formWrapper}>
          <h1 className={styles.titleForm}>Sign In</h1>
          <form
            className={styles.form}
            method="GET"
            onSubmit={handleFormSubmit}
          >
            <input
              className={styles.inputForm}
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
              placeholder="Username Text Field"
            />
            <button className={styles.btnForm} type="submit">
              Send Button
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
