import React from 'react';

import "../styles.css";
import Link from '../GithubLinks/LinkTypes/link';

const logo = () => (
  <Link linkTo="https://github.com/5k-mirrors">
    <img className="logo" src="../src/logo/logo.png" alt="PoE Relic Checklist" />
  </Link>
);

export default logo;
