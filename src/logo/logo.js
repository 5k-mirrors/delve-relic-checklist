import React from 'react';

import "../styles.css";
import Link from '../GithubLinks/LinkTypes/link';
import orgLogo from 'orgLogo';

const logo = () => (
  <Link linkTo="https://github.com/5k-mirrors">
    <img className="logo" src={orgLogo} alt="5k-mirrors" />
  </Link>
);

export default logo;
