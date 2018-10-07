import React from "react";

import Link from './support/link';

class RelicCountDialogContent extends React.Component {
  constructor(props){
    super(props);
    this.sumOfRelics = props.sumOfRelics;
  }

  render() {
    return (
      <div>
        <Link linkTo="https://www.pathofexile.com/forum/view-thread/2197540">GGG announced</Link> 151 relics. An initial list of 157 were gathered in <Link linkTo="https://old.reddit.com/r/pathofexile/comments/97gmte/actual_list_of_151_reliquary_items/">this reddit post</Link>. Updates:
        <br/>
        <ul>
          <li>The Retch cannot be produced as relic</li>
          <li>The Beachhead cannot be produced as relic</li>
          <li>The Taming can be produced as relic</li>
          <li>The Perandus Manor can be produced as relic</li>
          <li>The following relics don't drop: Night's Hold, Natural Hierarchy, reasons are unknown</li>
          <li>As of <Link linkTo="https://www.pathofexile.com/forum/view-thread/2232076">3.4.3d</Link> `Fate of the Vaal` can drop</li>
          <li>2-socket abyss uniques are not counted separately</li>
        </ul>
        This puts the current known count at {this.sumOfRelics}.
      </div>
    );
  }
}

export default RelicCountDialogContent;
