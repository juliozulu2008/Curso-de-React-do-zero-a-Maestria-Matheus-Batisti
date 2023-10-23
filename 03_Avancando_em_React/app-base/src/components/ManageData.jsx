import { useState } from 'react';
const ManageData = () => {
  let data = 10;

  const [number, setNumber] = useState(0); // 0 é o valor inicial utilizando useState

  return (
    <div>
      <div>
        <p>valor: {data}</p>
        <button onClick={()=>(data = data += 1)}>Mudar valor</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={()=>setNumber(25)}>Mudar valor de state</button>
      </div>
    </div>
  )
}

export default ManageData;