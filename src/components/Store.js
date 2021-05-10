import "./Store.css"


const Store = ({ products, addToCart }) => {

    return (
        <div>
            <h1>Store</h1>
            <div id="storeDisplay">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="product">
                            <img src={item.img} alt={item.name} />
                            <h2>{item.name}</h2>
                            <button value={item.id} onClick={addToCart}>Add to cart</button>
                            <h3>£{item.price}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Store