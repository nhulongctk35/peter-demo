import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Text from "components/Text";

const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

class HomeContainer extends PureComponent {
  render() {
    return (
      <div>
        <Text size="large">Top 5 GitHub Users</Text>
        <Text>Tap the username to see more information</Text>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

export default HomeContainer;