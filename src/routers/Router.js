import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import RegistrationProducts from '../pages/RegistrationProducts/RegistrationProducts'
import QueryProducts from '../pages/QueryProducts/QueryProducts'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {

    return (

        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/registration/products">
                    <RegistrationProducts />
                </Route>

                <Route exact path="/query/products">
                    <QueryProducts />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router