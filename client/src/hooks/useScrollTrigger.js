import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import allActions from 'redux/actions';

const useScrollTrigger = (ref, fetching) => {
  const dispatch = useDispatch();

  const observer = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !fetching)
          dispatch(allActions.galleryActions.getNextPosts());
      }).observe(node);
    },
    [dispatch, fetching]
  );

  useEffect(() => {
    if (ref.current) {
      observer(ref.current);
    }
  }, [observer, ref]);
};

export default useScrollTrigger;
