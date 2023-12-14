import React from 'react'
import { useState } from 'react'
const water = () =>{
    const  [waterday,setwaterday] = useState<number>(0);
    const onChangeWater = (event : React.ChangeEvent<HTMLInputElement>) => {
        setwaterday(+event.target.value)
}
const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
}
return (
<>
    <div>
        <form onSubmit={onSubmit}>
            
            <label htmlFor="Water"> <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1><h1>{(waterday*2.2)*(30/2)}</h1> <br /> <h1>X มล.</h1></label>
            <input type="text"  id='waterday' name='waterday' placeholder='น้ำหนักตัวของคุณ' onChange={onChangeWater}/> 
        </form>
    </div>
</>
)
}

export default water