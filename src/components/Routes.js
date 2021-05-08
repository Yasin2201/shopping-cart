import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Store from "./Store"
import Cart from "./Cart"


const Routes = () => {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/store" component={Store} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes