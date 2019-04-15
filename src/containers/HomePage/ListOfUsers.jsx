import React, {PureComponent} from 'react';

import ButtonLink from './ButtonLink';

class ListOfUsers extends PureComponent {
    render() {
        const {users} = this.props;
        return (
            <div>
                {users.map(user => (<ButtonLink key={user} path={`/${user}`} label={user}/>))}
            </div>
        );
    }
}

ListOfUsers.propTypes = {};

export default ListOfUsers;
