import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// CSS File
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

// Components
import Participants from './components/participants/Participants';
import AddBtn from './components/layouts/AddBtn';
import AddParticipantModal from './components/participants/AddParticipantModal';
import Raffle from './components/raffle/Raffle';

const App = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    });

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Raffle} />
                        <Route path="/participants">
                            <div className="container">
                                <AddBtn />
                                <AddParticipantModal />
                                <Participants />
                            </div>
                        </Route>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
