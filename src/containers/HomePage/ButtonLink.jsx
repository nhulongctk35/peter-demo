import React, {PureComponent} from 'react';
import {Link}                 from "react-router-dom";

import Text from 'components/Text';

import './ButtonLink.scss';

class ButtonLink extends PureComponent {
    render() {
        const {label, path} = this.props;
        return (
            <Link
                to={path}
                className="link"
            >
                <Text
                    display="inline-block"
                    color="offBlack"
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
