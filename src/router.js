import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListCar from './pages/ListCar/ListCar';
import NewCar from './pages/NewCar/NewCar';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ListCar} />
                <Route path='/newcar' component={NewCar} />
            </Switch>
        </BrowserRouter>
    )
}