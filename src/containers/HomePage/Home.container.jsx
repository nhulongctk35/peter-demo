import React, {PureComponent} from 'react';

import Text   from "components/Text";
import Header from "components/Header";

import ListOfUsers from './ListOfUsers';

const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

class HomeContainer extends PureComponent {
    render() {
        return (
            <div>
                <Header label="Home"/>
                <div className="main-content">
                    <Text size="large" weight="bold" className="mb-10">Top 5 GitHub Users</Text>
                    <Text className="mb-10">Tap the username to see more information</Text>
                    <ListOfUsers users={topFive}/>
                </div>
            </div>
        );
    }
}

HomeContainer.propTypes = {};

export default HomeContainer;
