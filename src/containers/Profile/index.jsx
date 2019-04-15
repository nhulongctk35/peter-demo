import React, {Component} from 'react';
import {userService}      from "../../services";
import BasicProfile       from "./components/BasicProfile";

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

        return (
            <div>
                <BasicProfile {...this.state.user} />
            </div>
        );
    }
}

export default Index;
