import React from 'react';

import Link from './LinkTypes/link';
import BadgeLink from './LinkTypes/badgeLink';

import "../styles.css";

const githubLinks = props => (
  <div className="links">
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist/issues/new" text="Report issue" />
    <BadgeLink linkTo="https://github.com/5k-mirrors/relic-checklist"
    imgLink="https://img.shields.io/badge/-hosted%20with%20%E2%99%A5%EF%B8%8F%20by%20GitHub-%23c0c5ce.svg" imgAlt="GitHub"/>
    <Link linkTo="https://github.com/5k-mirrors" text="5k-mirrors" />
  </div>
);

export default githubLinks;
