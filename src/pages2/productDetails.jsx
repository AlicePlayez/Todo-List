import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"


export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data))
  })

  return (
    <div className="text-center mt-3">
      <h3>{product.name}</h3>
      <img src={product.image} width={250} height={250}></img>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link className="btn btn-primary" to="/">Go Back</Link>
    </div>
  )
}
