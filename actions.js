export const ADD_CARE_METHOD = 'ADD_CARE_METHOD';
export const REMOVE_CARE_METHOD = 'REMOVE_CARE_METHOD';
export const EDIT_CARE_METHOD = 'EDIT_CARE_METHOD';
export const COMPLETE_CARE_METHOD = 'COMPLETE_CARE_METHOD';
export const SKIP_CARE_METHOD = 'SKIP_CARE_METHOD';

export const addCareMethod = careMethod => {
  return {
    type: ADD_CARE_METHOD,
    careMethod
  };
};

export const removeCareMethod = careMethod => {
  return {
    type: REMOVE_CARE_METHOD,
    careMethod
  };
};

export const editCareMethod = careMethod => {
  return {
    type: EDIT_CARE_METHOD,
    careMethod
  };
};

export const completeCareMethod = careMethod => {
  return {
    type: COMPLETE_CARE_METHOD,
    careMethod
  };
};

export const skipCareMethod = careMethod => {
  return {
    type: SKIP_CARE_METHOD,
    careMethod
  };
};