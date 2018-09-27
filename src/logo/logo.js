import React from 'react';

import "../styles.css";
import Link from '../support/link';
import OrgLogo from 'OrgLogo';

const logo = () => (
  <Link linkTo="https://github.com/5k-mirrors">
    <img className="logo" src={OrgLogo} alt="5k-mirrors" />
  </Link>
);

export default logo;
