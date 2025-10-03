import React from 'react'

export default function Contact() {
  return (
    <div>
      <h1 style={{textAlign:"center", fontWeight:"bold", margin:"25px 0"}}>📩 Contact Us</h1>
      <div style={{padding:"20px 25%", boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <h1>Send us a message</h1>
        <p style={{marginTop:"20px", marginBottom: "10px", fontSize:"20px"}}>Name</p>
        <input className='form-control' type='text'></input>
        <p style={{marginTop:"20px", marginBottom: "10px", fontSize:"20px"}}>Email</p>
        <input className='form-control' type='email'></input>
        <p style={{marginTop:"20px", marginBottom: "10px", fontSize:"20px"}}>Message</p>
        <textarea style={{height:"200px"}} className='form-control'></textarea>
        <button className='btn btn-primary' style={{width:"100%", marginTop:"20px", marginBottom:"20px"}}>Send Message</button>
      </div>
    </div>
  )
}
