import React from 'react';
import PropTypes from 'prop-types';

import './Header.style.scss'

const Header = ({ label }) => {
    return (
        <header id="master-header">
            <span>{label}</span>
        </header>
    );
};

Header.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Header;
