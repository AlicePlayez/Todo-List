
import { Link } from "react-router-dom";
import {useState, createContext, useContext} from "react";
import { Data } from "../components/spa";


export const Profile = () => {

      const { setName, setMajor, setAge, setEmail, setPhone, setBrief } = useContext(Data);

    return(

        <div style={{display:"flex",  alignItems:"center", justifyContent:"center"}}>
            <div style={{textAlign: "left", borderRadius:"20px", padding: "20px", width:"40%", marginTop:"1%", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>Personal Info</h1>
                <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Name</p>
                <input onChange={(e) => setName(e.target.value)} style={{border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="text"></input>
                <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Major</p>
                <input onChange={(e) => setMajor(e.target.value)} style={{border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="text"></input>
                <hr />
                <div style={{display:"flex"}}>
                    <div style={{width: "48%"}}>
                        <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>About</h1>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Age</p>
                        <input onChange={(e) => setAge(e.target.value)} style={{border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="text"></input>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} style={{border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="email"></input>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Phone Number</p>
                        <input onChange={(e) => setPhone(e.target.value)} style={{border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="number"></input>
                    
                    </div>
                    <div style={{marginLeft:"25px", width: "48%"}}>
                        <h1 style={{ fontSize: "35px", color: "rgb(0, 107, 221)"}}>Brief</h1>
                        <p style={{color:"gray", marginBottom: "0px", fontSize:"20px"}}>Brief</p>
                        <textarea onChange={(e) => setBrief(e.target.value)} style={{maxWidth:"100%", maxHeight:"200px", minWidth:"60%", minHeight:"100px", border:"1px solid gray", borderRadius:"5px", color:"gray", width:"100%", fontSize:"20px"}} type="text"></textarea>
                    </div>

                </div>
                <Link to="/">
                    <button link="home" style={{marginTop:"10%" ,padding:"8px", backgroundColor:"white", borderRadius:"10px", fontSize:"18px", color:"green", border:"1px solid green"}}>Save Changes</button>

                </Link>
            </div>
        </div>
    )
}