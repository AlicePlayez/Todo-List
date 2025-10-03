import { useContext } from "react"
import { Link } from "react-router-dom"
import { Data } from "../App"
// https://fakestoreapi.com/products/id
export const Card = (props) => {
     const { list, setList } = useContext(Data)

     const isAdded = list.includes(props.id)

     const handleAddToCart = () => {
        setList((prevList) => isAdded ? prevList.filter((item)=> item !== props.id) : [...prevList, props.id])
     }

    return(
        <div className='card text-center p-3'>
            <Link to={`products/${[props.id]}`} style={{textDecoration: "none", color: "black"}}>
            <div className="position-relative">
                <img src={props.image} className='card-img' style={{width: "100%", height: "150px", objectFit:"cover"}}></img>
                <span className="badge bg-danger position-absolute top-0 end-0 p-2">${props.price}</span>
            </div>
            <p className="card-title text-truncate" style={{maxWidth:"220px"}}>{props.name}</p>
            </Link>
             <button className={isAdded ? "btn btn-outline-danger fw-bold" : "btn btn-outline-primary fw-bold"} onClick={() => handleAddToCart()}>{isAdded ? "Remove from Cart" : "Add to Cart"}</button>
        </div>
    )
}