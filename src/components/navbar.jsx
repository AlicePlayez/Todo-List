    import { Link } from "react-router-dom"
    
    export const Navbar = () => {
        return(
            <div style={{padding:"17px", backgroundColor:"rgb(0, 107, 221)"}}>
                <Link to="/" style={{marginRight:"30px", color: "white", textDecoration:"none"}}>Home</Link>
                {/* <Link to="/products">Products</Link> */}
                <Link to="/profile" style={{color: "white", textDecoration:"none"}}>Profile</Link>
            </div>
        )
    }

