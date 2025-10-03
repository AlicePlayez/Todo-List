import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { Data } from '../App'


export default function EditProfile() {

  const {fname, setFName, sname, setSName, email, setEmail, phoneNumber, setPhoneNumber} = useContext(Data)

  const [newFName, setNewFName] = useState(fname)
  const [newSName, setNewSName] = useState(sname)
  const [newEmail, setNewEmail] = useState(email)
  const [newPhone, setNewPhone] = useState(phoneNumber)

  const handleChange = () => {
    setFName(newFName)
    setSName(newSName)
    setEmail(newEmail)
    setPhoneNumber(newPhone)

    alert("Your Data Has Been Updated!")
  }

  return (
    <div className='container card mt-3 p-3'>
      <h2 className='text-center'>Edit Profile</h2>
      <hr />
      <label>Fist Name</label>
      <input type="text" className='form-control' placeholder={fname} onChange={(e) => setNewFName(e.target.value)}/>
      <label>Second Name</label>
      <input type="text" className='form-control' placeholder={sname} onChange={(e) => setNewSName(e.target.value)}/>
      <label>Email</label>
      <input type='email' className='form-control' placeholder={email} onChange={(e) => setNewEmail(e.target.value)}></input>
      <label>Phone Number</label>
      <input type='number' className='form-control' placeholder={phoneNumber} onChange={(e) => setNewPhone(e.target.value)}></input>

      <div className='d-flex justify-content-between mt-3'>
        
        <button className='btn btn-success' onClick={handleChange}>
          <i className='bi bi-check-circle me-2'></i> Save Changes
        </button>
        
        <Link to="/Profile">
          <button className='btn btn-secondary'>
          <i className='bi bi-arrow-left me-2'></i> Cancel
        </button>
        </Link>

      </div>
    </div>
  )
}

