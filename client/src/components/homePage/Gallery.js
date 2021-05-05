import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';

const Gallery = () => {
  const dispatch = useDispatch();
  const { fetching } = useSelector((state) => state.gallery);
  const { posts } = useSelector((state) => state.gallery);

  const getPosts = () => {
    dispatch(actions.galleryActions.getNextPosts());
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <>here</>;
};

export default Gallery;
