
import { useState, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../components/spa";


export const Home = () => {

  const { name, major, age, email, phone, brief } = useContext(Data);


    return(
        <div style={{display:"flex",  alignItems:"center", justifyContent:"center"}}>
            <div style={{textAlign: "left", borderRadius:"20px", padding: "20px", width:"40%", marginTop:"1%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>{name}</h1>
                <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>{major}</p>
                <hr />
                <div style={{display:"flex"}}>
                    <div style={{width: "48%"}}>
                        <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>About</h1>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Age - {age}</p>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>{email}</p>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>{phone}</p>                    
                    </div>
                    <div style={{marginLeft:"25px", width: "48%"}}>
                        <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>Brief</h1>
                        <p style={{wordWrap: "break-word", overflowWrap: "break-word", color:"gray", marginBottom: "0px", fontSize:"20px"}}>{brief}</p>
                    </div>

                </div>
                <Link to="/profile">
                    <button link="home" style={{marginTop:"10%" ,padding:"8px", backgroundColor:"white", borderRadius:"10px", fontSize:"18px", color:"rgb(4, 98, 192)", border:"1px solid rgb(4, 98, 192)"}}>Edit Profile</button>

                </Link>
            </div>
        </div>
    )
}