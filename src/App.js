import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard, Error } from './pages/index';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
