import './styles/Cart.css'

const Cart = ({ itemCart, removeFromCart, getVal }) => {

    let cartTotal = itemCart.reduce((total, item) => total + item.total, 0)

    const checkout = () => {
        alert("Thanks For Shopping!")
    }

    return (
        <div id="cartDisplay">
            <h2>{itemCart.length > 0 ? `Total : £${cartTotal.toFixed(2)}` : ""}</h2>

            {itemCart.length > 0 ? "Checkout" && <button onClick={checkout}>Checkout</button> : <h2>Cart Empty</h2>}

            <div className="items">
                {itemCart.map((item) => {
                    return (
                        <div key={item.id} className="itemCard">
                            <img src={item.img} alt={item.name} className="productImage" />
                            <h2>{item.name}</h2>
                            <h3>£{(item.price * item.qty).toFixed(2)}</h3>
                            <input id={item.id} type="number" placeholder="qty" onChange={getVal} value={item.qty} />
                            <div>
                                <button id="removeBtn" value={item.id} onClick={removeFromCart}>Remove Item</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Cart