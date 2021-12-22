import React from "react";
import { useState } from "react";
const SubmitForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmitForm = () => {
    console.log({name, email})
  }
  return (
    <div style={{"padding":32 }}>
      <input
      value = {name}
      onChange={e => setName(e.target.value)} 
      /> 
      <input
      value = {email}
      onChange={e => setEmail(e.target.value)} 
      /> 
      <button onClick={handleSubmitForm}>Submit</button>
    </div>
  )
}
export default SubmitForm;