import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Store from "./components/Store"
import Cart from "./components/Cart"
import productData from './components/data/productData'
import "./components/styles/Routes.css"


const Routes = () => {
    const products = productData
    const [itemCart, setItemCart] = useState([])

    const addToCart = (e) => {
        const targetValue = parseInt(e.target.value)
        const foundItem = products.find((item) => { return item.id === targetValue })

        if (!itemCart.some(e => e.id === foundItem.id)) {
            foundItem["qty"] = 1
            foundItem["total"] = foundItem.price
            setItemCart([...itemCart, foundItem])
        }
    }

    const removeFromCart = (e) => {
        const targetValue = parseInt(e.target.value)
        const keptItems = itemCart.filter((item) => { return item.id !== targetValue })
        setItemCart(keptItems)
    }

    const getVal = (e) => {
        let targetValue = parseInt(e.target.value)
        const targetID = parseInt(e.target.id)
        setItemCart(
            itemCart.map((item) => {
                if (item.id === targetID) {
                    return {
                        ...item,
                        qty: targetValue,
                        total: parseFloat((targetValue * item.price).toFixed(2))
                    }
                } else {
                    return item
                }
            })
        )
    }

    return (
        <div id="mainDiv">
            <BrowserRouter>
                <Navbar itemCart={itemCart} />
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/store">
                        <Store products={products} addToCart={addToCart} />
                    </Route>
                    <Route exact path="/cart" >
                        <Cart itemCart={itemCart} removeFromCart={removeFromCart} getVal={getVal} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes