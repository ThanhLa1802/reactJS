import { useState } from "react";

const Infor = () => {
  const [infor, setInfor] = useState({
    name: "Thanh",
    age: 18,
    address: "Ha Noi, VN"
  })
  const updateInforClicked = () => {
    setInfor({
      ...infor,
      developer: "Python"
    })
  }
  return (
    <div>
      <h1>Infor: {JSON.stringify(infor)}</h1>
      <button onClick = {updateInforClicked}>Update Infor</button>
      <ChangeName></ChangeName>
    </div>
  );
}
export default Infor;