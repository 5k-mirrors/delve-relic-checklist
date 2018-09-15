import React from 'react';

const link = props => (
  <a href={props.linkTo} target="_blank">
    {props.children}
  </a>
);

export default link;
