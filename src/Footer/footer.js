import React from 'react';
import AlertDialog from './alertDialog';

import "../styles.css";

const footer = props => (
  <div className="counter transparent-tile">
    <AlertDialog
      label="Legal"
      title="Legal"
      contentText="Path of Exile content and materials are trademarks and copyrights of Grinding Gear Games or its licensors.
      This site is fan-made and not affiliated with Grinding Gear Games in any way."
    />
  </div>
);

export default footer;
