import React from 'react';
import { Wrapper, PostImage, PostInfo } from './SinglePost.sc';

const SinglePost = ({ file, title, user, description }) => {
  return (
    <Wrapper>
      <PostImage src={file} />
      <PostInfo>
        <h1>{user?.nickname}</h1>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </PostInfo>
    </Wrapper>
  );
};

export default SinglePost;
