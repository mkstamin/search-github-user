import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard, Error, Login } from './pages/index';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
