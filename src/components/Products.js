import productData from './data/productData'
import "./Products.css"

const Products = () => {

    const products = productData


    return (
        <div id="productsDisplay">
            {products.map((item) => {
                return (
                    <div key={item.id} className="product">
                        <img src={item.img} alt={item.name} />
                        <h2>{item.name}</h2>
                        <button>Add to cart</button>
                        <h3>£{item.price}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Products