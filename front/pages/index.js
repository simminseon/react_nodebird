import React from 'react'; // next.js는 없어도 됨
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

import { PostCard } from '../components/PostCard';
import { PostForm } from '../components/PostFrom';


const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
    </AppLayout>
  );
};

export default Home;