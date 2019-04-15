import React from 'react';

const BasicProfile = ({avatar_url, name, location}) => {
    return (
        <div className="user-profile">
            <img src={avatar_url} alt="Avatar"/>
            <div>
                <h3>{name}</h3>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default BasicProfile;
