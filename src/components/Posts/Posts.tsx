import { FC } from 'react';
import { useGetRequestQuery } from '../../services/requestApi';
import Post from '../Post/Post';
import styles from './Posts.module.css';

interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: FC = () => {
  const { data, error, isLoading } = useGetRequestQuery('posts');

  return (
    <div className={styles.posts}>
      {error ? (
        <h1>Что-то пошло не так...</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((post: PostsData) => <Post key={post.id} {...post} />)
      )}
    </div>
  );
};

export default Posts;
