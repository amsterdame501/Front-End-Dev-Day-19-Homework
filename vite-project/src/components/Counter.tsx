import React from 'react'

type CounterProps ={
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: React.ReactNode,
}

const Counter = ({ setCount ,children}:CounterProps) => {
    
    return (
        <>
        <h1>{children}</h1>
        <button onKeyDown={() => setCount(prev => prev +1)}>ปุ่ม + ตัวเลข</button>
        <button onMouseOver={() => setCount(prev => prev -1)}>ปุ่ม - ตัวเลข</button>
        </>
    )
}

export default Counter