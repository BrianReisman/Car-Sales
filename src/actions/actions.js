export const ADD_UPGRADE = 'ADD_UPGRADE';

export const addItem = (itemToAddID) => {
  return { type: ADD_UPGRADE, payload: itemToAddID}
}


//// dispatch connects action w/ reducer. BUT THIS IS REDUX TIME

