import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RiseLoader } from 'halogenium';
import useScrollTrigger from 'hooks/useScrollTrigger';
import * as S from './Gallery.sc';
import theme from 'styles/theme';
import SimpleModal from 'components/shared/SimpleModal';
import SinglePost from 'components/posts/SinglePost';
import { Link } from 'react-router-dom';
import PostTile from 'components/posts/PostTile';

const Gallery = () => {
  const scrollTrigger = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const { fetching, posts } = useSelector((state) => state.gallery);
  const { hasNextPage } = useSelector((state) => state.pagination);

  useScrollTrigger(scrollTrigger, fetching);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const showPost = (post) => {
    setModalData(post);
    toggleModal();
  };

  const nextImagesLoader = () => {
    if (fetching) return <RiseLoader color={theme.secondary} />;
    if (!hasNextPage) return <span>There is nothing more to load... :(</span>;
    return <div ref={scrollTrigger} />;
  };

  const mappedImages = posts.map((post) => (
    <PostTile post={post} showPost={showPost} />
  ));

  return (
    <S.GalleryWrapper>
      <S.GallertGrid>{mappedImages}</S.GallertGrid>
      <S.IndicatorWrapper>{nextImagesLoader()}</S.IndicatorWrapper>
      <SimpleModal open={isModalOpen} onClose={toggleModal}>
        <SinglePost {...modalData} />
      </SimpleModal>
    </S.GalleryWrapper>
  );
};

export default Gallery;
