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
          <li>The Taming can be produced as relic</li>
          <li>There are no relic maps</li>
          <li>The following relics don't seem to drop: Fate of the Vaal, Night's Hold, Natural Hierarchy. Reasons are unknown (sources: <Link linkTo="https://www.reddit.com/r/pathofexile/comments/9ejqeu/bugged_there_are_0_fate_of_the_vaal_sword_opened/">1</Link>, <Link linkTo="https://www.pathofexile.com/forum/view-thread/2214627/page/1#p15802185">2</Link>).</li>
        </ul>
        This puts the current known count at {this.sumOfRelics}.
      </div>
    );
  }
}

export default RelicCountDialogContent;
