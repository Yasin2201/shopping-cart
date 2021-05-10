import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Store from "./components/Store"
import Cart from "./components/Cart"
import productData from './components/data/productData'


const Routes = () => {
    const products = productData

    const [itemCart, setItemCart] = useState([])

    const addToCart = (e) => {
        const targetValue = parseInt(e.target.value)
        const foundItem = products.find((item) => { return item.id === targetValue })

        if (!itemCart.includes(foundItem)) {
            setItemCart([...itemCart, foundItem])
        }
        console.log(itemCart)
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/store">
                        <Store products={products} addToCart={addToCart} />
                    </Route>
                    <Route exact path="/cart" >
                        <Cart itemCart={itemCart} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes