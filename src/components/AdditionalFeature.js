import React from "react";
import { connect } from "react-redux";

import { addFeature } from "../store/actions";

const AdditionalFeature = (props) => {
  const addClickHandler = () => {
    props.add(props.feature)
  };

  // console.log(props);
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addClickHandler}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (id) => dispatch(addFeature(id)),
  };
};

export default connect(null, mapDispatchToProps)(AdditionalFeature);
