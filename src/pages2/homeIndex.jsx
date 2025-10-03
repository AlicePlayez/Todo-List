import { useEffect, useState } from 'react'
import { Card } from "../components/card"
import axios from 'axios'
// API => https://fakestoreapi.com/products
export default function Home() {
    const [products, setProducts] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [filteredProducts, setFiltiredProducts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data))
    })
    
    useEffect(() => {
        if(inputValue === ""){
            setFiltiredProducts(products);
        } else{
            setFiltiredProducts(
                products.filter((product) =>
                    product.title.toLowerCase().includes(inputValue.toLowerCase()))
            )
        }
    }, [inputValue, products])

  return (
    <div style={{textAlign: "center"}} className='p-3 d-flex flex-column gap-3 align-items-center'>
        <h1>Search for a product</h1>
        <input type='text' className='form-control w-50' placeholder='Search...' onChange={(e) => setInputValue(e.target.value)} />
        <div className='products gap-3' style={productStyle}>
            {filteredProducts.length > 0 ?
            filteredProducts.map((product)=> (
                <Card name={product.title} image={product.image} price={product.price} id={product.id}/>
            )) : <p>No Products Found</p>}
        </div>
    </div>
  )
}





const productStyle = {
    width:"65%",
    display: "grid",
    gridTemplateColumns:"repeat(4, 24%)",
    gridTemplateRows:"auto",
    gap: "1%"
}

// display:"grid", gridTemplateColumns:"auto auto auto auto", gridTemplateRows:"auto"