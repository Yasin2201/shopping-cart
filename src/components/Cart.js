import './Cart.css'

const Cart = ({ itemCart, removeFromCart, getVal }) => {

    let cartTotal = itemCart.reduce((total, item) => total + item.total, 0)

    return (
        <div >
            <h1>Cart</h1>
            <h2>Total: £{cartTotal.toFixed(2)}</h2>
            <div className="items">
                {itemCart.map((item) => {
                    return (
                        <div key={item.id} className="itemCard">
                            <button value={item.id} onClick={removeFromCart}>x</button>
                            <img src={item.img} alt={item.name} className="productImage" />
                            <h2>{item.name}</h2>
                            <h3>£{(item.price * item.qty).toFixed(2)}</h3>
                            <input id={item.id} type="number" placeholder="qty" onChange={getVal} value={item.qty} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart