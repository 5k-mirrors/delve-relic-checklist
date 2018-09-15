import React from 'react';

const badgeLink = props => (
  <a href={props.linkTo} target="_blank">
    <img src={props.imgLink} alt={props.imgAlt} />
  </a>
);

export default badgeLink;
