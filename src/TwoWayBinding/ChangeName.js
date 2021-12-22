import React from "react";
import { useState } from "react";
// const ChangeName = () => {
//   const [name, setName] = useState('')
//   console.log(name)
//   return (
//     <div>
//       <input
//         value = {name}
//         onChange={e =>setName(e.target.value)} >
//       </input>
//       <button onClick={() => setName("La Tien Thanh")}> Change</button>
//     </div>
//   )
// }
const ChangeName = () => {
  const [name, setName] = useState('')
  console.log(name)
  return (
    <div>
      <input
      value = {name}
      onChange={e => setName(e.target.value)} 
      > 
      </input>
      <button onClick={() => setName("La Tien Thanh")}>Change</button>
    </div>
  )
}
export default ChangeName;
