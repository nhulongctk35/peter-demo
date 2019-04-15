import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

class ButtonLink extends PureComponent {
  handleClick = () => {
    console.log('Clicked');
  };

  render() {
    const { label } = this.props;
    return (
      <Button onClick={this.handleClick}>
        { label }
      </Button>
    );
  }
}

ButtonLink.propTypes = {};

export default ButtonLink;