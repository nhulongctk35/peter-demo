import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const { label } = this.props;
    return (
      <button className="button">
        {label}
      </button>
    );
  }
}

Button.propTypes = {};

export default Button;