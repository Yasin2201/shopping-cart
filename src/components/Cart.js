import './Cart.css'

const Cart = ({ itemCart }) => {
    return (
        <div >
            <h1>Cart</h1>
            <h2>Total:</h2>
            <div className="items">
                {itemCart.map((item) => {
                    return (
                        <div key={item.id} className="itemCard">
                            <img src={item.img} alt={item.name} className="productImage" />
                            <h2>{item.name}</h2>
                            <h3>£{item.price}</h3>
                            <button>-</button>
                            <input placeholder="qty" />
                            <button>+</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart