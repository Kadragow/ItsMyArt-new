export const SET_PAGE_PARAMETERS = 'SET_PAGE_PARAMETERS';
export const RESET_PAGE_PARAMETERS = 'RESET_PAGE_PARAMETERS';

const setPageParameters = (pageParameters) => ({
  type: SET_PAGE_PARAMETERS,
  pageParameters,
});

const resetPageParameters = () => ({
  type: RESET_PAGE_PARAMETERS,
});

const actionSet = {
  setPageParameters,
  resetPageParameters,
};

export default actionSet;
