import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


const Login = () => {
  const [weight,setweight] = useState<number>(0);
  const [hight,sethight] = useState<number>(0);
  

  const onChangeWeight = (event : React.ChangeEvent<HTMLInputElement>) => {
    setweight(+event.target.value)
    console.log(weight)
  }
  const onChangehight = (event : React.ChangeEvent<HTMLInputElement>) => {
    sethight(+event.target.value)
    console.log(hight)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log( weight / (hight*hight) );

  }
  return(
    <>
    <div>
       
      <form onSubmit={(onSubmit)}>
        <h1 >{weight } <br />{hight }</h1>
        <label htmlFor="weight">น้ำหนัก ก.ก.</label>
        <input type="text" id='weight' name="name" onChange={onChangeWeight} />
        <label htmlFor="weight">ส่วนสูง เมตร</label>
        <input type="text" id='hight' name="hight" onChange={onChangehight} />
        <input type="submit"  />
      </form>
    </div>
    </>
  )
}

export default Login