import React, { useEffect, useState } from 'react'

const UseEffect = ({data}) => {

    const [count , setCount] = useState(0);
    const [total , setTotal] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    function handleClick1(){
        setTotal(total + 1);
    }

    useEffect(() => {
        CallAlert()

    }, [count, total ,  ])

    function CallAlert(){
        alert("hello");
        console.log("hello")
    }

    console.log("re-render from useEffect");

  return (
    <>
        <button onClick={handleClick}>count : {count}</button>
        <button onClick={handleClick1}>total : {total}</button>
        <h1>{data}</h1>
    </>
  )
}

export default UseEffect
