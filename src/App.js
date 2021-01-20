import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./actions/actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} dispatch={props.addItem} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          dispatch={props.removeItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//! Who is calling this function??
//!What is being passed in?
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
    // test: 'who called me???'
  };
};

const mapDispatchToProps = { addItem, removeItem };

//*I want to grant <App/> access to state + actions.
export default connect(mapStateToProps, mapDispatchToProps)(App);

//Turning state to props
// connect('bespoke, state shape', '{action factories, weWillUse}')('IN THIS COMPONENT')
