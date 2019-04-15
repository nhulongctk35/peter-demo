import React, {Component} from 'react';
import {userService}      from "../../services";

class Index extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        const {match: {params}} = this.props;

        userService.getUsers(params.id)
            .then(data => {
                this.setState({
                    user: data,
                })
            })
    }

    render() {
        const {match: {params}} = this.props;
        if (!this.state.user) {
            return <div>{`Loading ${params.id}'s profile`}</div>
        }

        const {user} = this.state;
        return (
            <div>
                <div className="profile">
                    <img src={user.avatar_url} alt="Avatar"/>
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.location}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
