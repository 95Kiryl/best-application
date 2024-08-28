import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Button />
    </div>
  );
};

export default Header;
