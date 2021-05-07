import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RiseLoader } from 'halogenium';
import useScrollTrigger from 'hooks/useScrollTrigger';
import * as S from './Gallery.sc';
import theme from 'styles/theme';

const Gallery = () => {
  const scrollTrigger = useRef();

  const { fetching, posts } = useSelector((state) => state.gallery);
  const { hasNextPage } = useSelector((state) => state.pagination);

  useScrollTrigger(scrollTrigger, fetching);

  const nextImagesLoader = () => {
    if (fetching) return <RiseLoader color={theme.secondary} />;
    if (!hasNextPage) return <span>There is nothing more to load... :(</span>;
    return <div ref={scrollTrigger} />;
  };

  const mappedImages = posts.map((post) => (
    <S.PostWrapper key={post?._id}>
      <S.PostImage src={post?.file} />
      <S.PostInfo>
        <h2>{post?.title}</h2>
        <a href="#">by {post?.user?.nickname}</a>
      </S.PostInfo>
    </S.PostWrapper>
  ));

  return (
    <S.GalleryWrapper>
      <S.GallertGrid>{mappedImages}</S.GallertGrid>
      <S.IndicatorWrapper>{nextImagesLoader()}</S.IndicatorWrapper>
    </S.GalleryWrapper>
  );
};

export default Gallery;
