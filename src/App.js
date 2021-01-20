import React from "react";
import { connect } from "react-redux";
import { addItem } from "./actions/actions";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        {/* <Header car={state.car} />
        <AddedFeatures car={state.car} dispatch={dispatch} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={state.additionalFeatures}
          dispatch={dispatch}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
      </div>
    </div>
  );
};

//! Who is calling this function??
//!What is being passed in?
const mapStateToProps = (state) => {
  console.log(state)
  return {
    carState: state,
    test: 'who called me???'
  };
};

// const mapDispatchToProps = { addItem };

//*I want to grant <App/> access to state + actions. 
export default connect(mapStateToProps, { addItem })(App);


//Turning state to props
// connect('bespoke, state shape', '{action factories, weWillUse}')('IN THIS COMPONENT')

