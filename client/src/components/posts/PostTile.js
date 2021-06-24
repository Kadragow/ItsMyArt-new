import React from 'react';
import * as S from './PostsTile.sc';
import { Link } from 'react-router-dom';

const PostTile = ({ showPost, post }) => (
  <S.PostWrapper key={post?._id}>
    <S.PostImage src={post?.file} onClick={() => showPost(post)} />
    <S.PostInfo>
      <h2>{post?.title}</h2>
      <Link to={`/user/${post?.user?.nickname}`}>
        by {post?.user?.nickname}
      </Link>
    </S.PostInfo>
  </S.PostWrapper>
);

export default PostTile;
