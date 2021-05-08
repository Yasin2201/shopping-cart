import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Store from "./components/Store"
import Cart from "./components/Cart"


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
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