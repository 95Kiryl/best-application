import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { removeUser } from '../../redux/slices/userDataSlice';
import styles from './Button.module.css';

const ButtonLogOut: FC = () => {
  const userObj = useAppSelector((state) => state.userObj);
  const dispatch = useAppDispatch();

  const handleRemoveUser = () => {
    dispatch(removeUser(userObj));
  };

  return (
    <button onClick={handleRemoveUser} className={styles.btnSignIn}>
      Log Out
    </button>
  );
};

export default ButtonLogOut;
