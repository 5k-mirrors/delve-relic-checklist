import React from 'react';
import AlertDialog from '../support/alertDialog';

import "../styles.css";

const footer = props => (
  <div className="transparent-tile">
    <div className="tileItem">
      <AlertDialog
        label="Legal"
        title="Legal"
        contentText="Path of Exile content and materials are trademarks and copyrights of Grinding Gear Games or its licensors.
        This site is fan-made and not affiliated with Grinding Gear Games in any way. Unfortunately. C'mon Chris hire us."
      />
    </div>
    <div className="tileItem">
      <AlertDialog
        label="Privacy"
        title="Privacy"
        contentText={"We're not interested in your personal data, we're just here to have fun. If you'd like a more official sounding privacy statement contact us and we'll hit up Harvey Specter to write it."}
      />
    </div>
  </div>
);

export default footer;
