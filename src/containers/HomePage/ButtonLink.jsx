import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Text from 'components/Text';

import './ButtonLink.scss';

class ButtonLink extends PureComponent {
  render() {
    const { label, path } = this.props;
    return (
        <Link
          to={path}
          className="link"
        >
          <Text
            display="inline-block"
            color="white"
            className="link--visited"
          >
            {label}
          </Text>
        </Link>
    );
  }
}

ButtonLink.propTypes = {};

export default ButtonLink;
