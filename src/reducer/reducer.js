import { ADD_UPGRADE } from "../actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};



//*this sets state for the first time thanks to initialState default.
//*no action is passed so the switch statement handles using default:



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_UPGRADE:
      const shallowCopyOfCarProperty = { ...state.car };
      shallowCopyOfCarProperty.features = [
        ...shallowCopyOfCarProperty.features,
        action.payload,
      ];
      return {
        ...state,
        car: shallowCopyOfCarProperty,
      };
    default:
      return state;
  }
};



//*test below updates state with payload.
// console.log(reducer(undefined, { type: ADD_UPGRADE, payload: "test" }));
