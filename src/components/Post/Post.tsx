import { FC } from 'react';
import styles from './Post.module.css';

interface CardProps {
  title: string;
  body: string;
}

const Post: FC<CardProps> = ({ title, body }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}></div>
      <h1 className={styles.card__title}>{title}</h1>
      <p className={styles.card__description}>{body}</p>
    </div>
  );
};

export default Post;
