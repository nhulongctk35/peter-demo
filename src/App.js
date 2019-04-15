import React, {Component}             from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import HomePage    from './containers/HomePage/Home.container'
import ProfilePage from './containers/Profile'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/:id" component={ProfilePage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
