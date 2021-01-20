export const ADD_UPGRADE = 'ADD_UPGRADE';
export const REMOVE_UPGRADE = 'REMOVE_UPGRADE';

export const addItem = (itemToAddID) => {
  return { type: ADD_UPGRADE, payload: itemToAddID}
}
export const removeItem = (itemToRemoveID) => {
  return { type: REMOVE_UPGRADE, payload: itemToRemoveID}
}

//// dispatch connects action w/ reducer. BUT THIS IS REDUX TIME

