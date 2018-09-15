import React from 'react';

import Link from './LinkTypes/link';
import "../styles.css";

const githubLinks = props => (
  <div className="links">
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist/issues/new">Report issue</Link>
    <Link linkTo="https://github.com/5k-mirrors/relic-checklist">
      <img src="https://img.shields.io/badge/-hosted%20with%20%E2%99%A5%EF%B8%8F%20by%20GitHub-%23c0c5ce.svg" alt="GitHub" />
    </Link>
    <Link linkTo="https://github.com/5k-mirrors" text="5k-mirrors">5k-mirrors</Link>
  </div>
);

export default githubLinks;
