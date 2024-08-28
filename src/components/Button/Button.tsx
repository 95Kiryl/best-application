import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import ButtonLogOut from './ButtonLogOut';

const Button: FC = () => {
  const userObj = useAppSelector((state) => state.userObj);

  return (
    <>
      {userObj.length !== 0 ? (
        <ButtonLogOut />
      ) : (
        <Link to={'signin'}>
          <button className={styles.btnSignIn}>Sign In</button>
        </Link>
      )}
    </>
  );
};

export default Button;
