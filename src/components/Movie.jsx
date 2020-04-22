import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  return (
    <><h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.quantity}</p></>  
  );


}

Movie.prototype={
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Movie;