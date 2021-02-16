import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../store/actions";

const AddedFeature = (props) => {
  
  const removeClickHandler = () => {
    props.remove(props.feature);
  };

  return (
    <li>
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
