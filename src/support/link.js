import React from 'react';

const link = props => (
  <a href={props.linkTo} target="_blank" class={props.class}>
    {props.children}
  </a>
);

export default link;
