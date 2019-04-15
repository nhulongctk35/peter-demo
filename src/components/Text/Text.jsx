import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import "./Text.scss";

class Text extends PureComponent {
  render() {
    const { children, size, color, display, className, weight, ...remainingProps } = this.props;

    const classNames = cx(
      `text--${size}`,
      `text--${color}`,
      `text--${display}`,
      `text--${weight}`,
      className,
    );

    return (
      <div className={classNames} {...remainingProps}>
        {children}
      </div>
    );
  }
}

Text.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  display: PropTypes.oneOf(['inline', 'inline-block', 'block']),
  weight: PropTypes.oneOf(['default', 'semibold', 'bold']),
  color: PropTypes.oneOf(['offBlack']),
};

Text.defaultProps = {
  display: 'block',
  size: 'normal',
  weight: 'default',
  color: 'offBlack',
};

export default Text;