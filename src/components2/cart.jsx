import { useContext, useEffect, useState } from "react"
import { CheckoutCard } from "./checkoutCard"
import { Data } from "../App"

// https://fakestoreapi.com/products
const Cart = () => {

    const { list, setList } = useContext(Data)
    const [products, setProducts] = useState([])

    useEffect(() =>{
        if(list.length > 0){
            fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
                const filtered = data.filter((product) => list.includes(product.id))
                setProducts(filtered)
            })
        } else{
            setProducts([])
        }
    }, [list])

    // Remove
    const remove = (id) => {
        setList((prevList) => prevList.filter((item) => item !== id))
    }

    // Total
    let total = 0;
    products.forEach((item) => {
        total += item.price
    })
    total = total.toFixed(2)

    // Checkout
    const checkout = () => {
        setList([])
        alert("Done!")
    }

    return(
        <div className="container m-5">
            <h2>Your Cart 🛒</h2>
            <div className="row">
                <div className="col-lg-8">
                    {products.map((product) => (
                        <CheckoutCard id={product.id} name={product.title} price={product.price} image={product.image} onRemove={remove} />
                    ))}

                </div>
                <div className="col-lg-4">
                    <div className="card p-3">
                        <h3>Order Summary</h3>
                        <hr />
                        <h5 className="mb-5">Total: ${total}</h5>
                        <button className="btn btn-primary mb-2"  onClick={() => checkout()}>Checkout</button>
                        <button className="btn btn-outline-danger mb-2" onClick={() => setList([])}>Clear Cart</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart