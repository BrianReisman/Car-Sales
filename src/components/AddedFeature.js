import React from 'react';

const AddedFeature = props => {

  const removeClickHandler = () => {
    console.log('click Removed')
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeClickHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
