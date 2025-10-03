import React from 'react'

export default function About() {
  return (
    <div className='mt-5' style={{border: "1px solid gray", borderRadius:"15px", marginRight: "5%", marginLeft:"5%"}}>
      <div className='text-center p-5'>
        <h1 style={{fontWeight: "bold"}}>About Us</h1>
        <hr />
        <p style={{fontSize: "24px", color: "gray"}}>Welcome to our platform! We are dedicated to providing high-quality services and enhancing user experince through innovation and technology.</p>
      </div>
      <div className='p-5'>
        <h1 style={{fontSize:"30px", fontWeight: "bold"}}>🎯 Our Mission</h1>
        <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet esse consectetur eos perspiciatis, fugiat unde dolorum consequatur quasi ullam a. Eveniet amet, minus eum ad dolores harum quod!</p>
        <br />
        <h1 style={{fontSize:"30px", fontWeight: "bold"}}>🧑‍💻 Meet Our Team</h1>
        <p style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet esse consectetur eos perspiciatis, fugiat unde dolorum consequatur quasi ullam a. Eveniet amet, minus eum ad dolores harum quod!</p>
        <br />
        <h1 style={{fontSize:"30px", fontWeight: "bold"}}>📩 Contact Us</h1>
        <p style={{fontSize: "18px"}}>Have any questions? feel free to reach out to us at:</p>
        <p> <span style={{fontWeight: "bold"}}>Email:</span> support@example.com</p>
        <p> <span style={{fontWeight: "bold"}}>Phone:</span> +20 123 4565</p>

      </div>

    </div>

  )
}
