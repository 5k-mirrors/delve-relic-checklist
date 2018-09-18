import React from 'react';

import Link from './LinkTypes/link';
import "../styles.css";

const githubLinks = props => (
  <div className="links">
    <Link linkTo="https://github.com/5k-mirrors" text="5k-mirrors">Made by 5k-mirrors</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist">Hosted by GitHub</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist/issues/new">Report issue</Link>
  </div>
);

export default githubLinks;
