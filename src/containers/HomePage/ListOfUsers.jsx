import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

class ListOfUsers extends PureComponent {
  render() {
    const { users } = this.props;
    return (
      <div>
        {
          users.map(user => (<Button>{user}</Button>))
        }
      </div>
    );
  }
}

ListOfUsers.propTypes = {};

export default ListOfUsers;