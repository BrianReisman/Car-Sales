import * as actionTypes from "./actionTypes";

export const addFeature = (addedFeature) => {
  console.log(addedFeature)
  return {
    type: actionTypes.ADD_FEATURE,
    payload: addedFeature,
  };
};

export const removeFeature = (removedFeature) => {
  return{
    type: actionTypes.REMOVE_FEATURE,
    // payload:
  }
}