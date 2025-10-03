import react, { useContext } from "react";
import { Link } from "react-router-dom"
import { Data } from "../App";

export default function Profile(){

    const {sname ,fname, email, phoneNumber} = useContext(Data)

    return(
        <div className="container card mt-3">
            <div className="d-flex flex-column align-items-center p-3">
                <img width={100} height={100} src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="" />
                <h2>{fname} {sname}</h2>
                <Link to="/editProfile">
                    <button className="btn btn-primary">
                        <i className="bi bi-pencil-square me-2"></i> Edit Profile
                    </button> 
                </Link>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-5">
                <div>
                    <h3>Email</h3>
                    <p>{email}</p>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>

    )
}