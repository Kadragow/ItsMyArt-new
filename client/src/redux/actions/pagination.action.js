export const SET_PAGE_PARAMETERS = 'SET_PAGE_PARAMETERS';

const setPageParameters = (pageParameters) => ({
  type: SET_PAGE_PARAMETERS,
  pageParameters,
});

const actionSet = {
  setPageParameters,
};

export default actionSet;
