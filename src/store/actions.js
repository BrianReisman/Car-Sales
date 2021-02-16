import * as actionTypes from "./actionTypes";

export const addFeature = (addedFeature) => {
  return {
    type: actionTypes.ADD_FEATURE,
    payload: addedFeature,
  };
};

export const removeFeature = (removedFeature) => {
  console.log(removedFeature)
  return{
    type: actionTypes.REMOVE_FEATURE,
    payload: removedFeature,
  }
}