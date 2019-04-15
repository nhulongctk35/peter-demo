import React, {Component} from 'react';
import {userService}      from "../../services";
import BasicProfile       from "./components/BasicProfile";
import Header             from "../../components/Header";

class Index extends Component {
    state = {
        user: null
    };

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
                <Header label="User"/>
                <div className="main-content">
                    <BasicProfile {...this.state.user} />
                </div>
            </div>
        );
    }
}

export default Index;
