import * as actionTypes from "./actionTypes";

const initState = {
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

export const reducer = (state = initState, action) => {
  console.log("action type:", action.type);
  console.log("action payload:", action.payload);

  switch (action.type) {
    case actionTypes.ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          // features: [state.car.features.concat(action.payload)]
          features: [...state.car.features, action.payload]
        },
        additionalFeatures: state.additionalFeatures.filter(feat => feat.id !== action.payload.id)
      };
    case actionTypes.REMOVE_FEATURE:
    default:
      return state;
  }
};
