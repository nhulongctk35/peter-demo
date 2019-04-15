import React from 'react';

import './BasicProfile.style.scss'

const BasicProfile = ({avatar_url, name, location}) => {
    return (
        <div className="user-profile">
            <img src={avatar_url} alt="Avatar" className="user-avatar" />
            <div className="user-info">
                <h3 className="user-name">{name}</h3>
                <p className="user-location">{location}</p>
            </div>
        </div>
    );
};

export default BasicProfile;
