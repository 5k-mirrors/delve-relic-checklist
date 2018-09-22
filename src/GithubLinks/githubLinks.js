import React from 'react';

import Link from './LinkTypes/link';
import "../styles.css";

const githubLinks = props => (
  <div className="transparent-tile">
    <Link linkTo="https://github.com/5k-mirrors" class="tileItem">Made by 5k-mirrors</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist" class="tileItem">Hosted by GitHub</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist/issues/new" class="tileItem">Report issue</Link>
  </div>
);

export default githubLinks;
