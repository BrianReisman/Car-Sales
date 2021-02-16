import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../store/actions";

const AddedFeature = (props) => {
  
  const removeClickHandler = () => {
    // console.log();
    props.remove(props.feature);
  };

  // console.log(">>>>>>>", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={removeClickHandler}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (feat) => dispatch(removeFeature(feat)),
  };
};

export default connect(null, mapDispatchToProps)(AddedFeature);
