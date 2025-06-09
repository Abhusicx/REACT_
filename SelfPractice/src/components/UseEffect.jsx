import { useEffect, useState } from 'react'

const UseEffect = ({count}) => {

    const [data, setData] = useState(0);

    //case 1 : runs on every render
    useEffect(() => {
        console.log("runs on every render");
        CallAlert()
    })

    //case 2 : runs only once
    useEffect(() => {
        console.log("runs only once");
        CallAlert()
    }, [])

    //case 3 : runs when value of prop changes
    useEffect(() => {
        console.log("run when value of prop changes")
        CallAlert()
    }, [count])

    //case 4 : runs when value of state changes
    useEffect(() => {
        console.log("run when value of state changes")
        CallAlert()
    }, [data])

    //case 5 : runs when value of state and prop changes
    useEffect(() => {
        console.log("run when value of state and prop changes")
        CallAlert()
    }, [data, count])

    //case 6 : runs when component unmounts
    useEffect(() => {
        console.log("runs when only once (for cleanup function)")
        CallAlert()
        return () => {
            console.log("component unmounted");
        }
    }, [])

    function CallAlert(){
        alert("hello");
        console.log("hello")
    }

    function handleClick(){
        setData(data + 2);
    }

  return (
    <div>
      <button onClick={handleClick}>{data}</button>
    </div>
  )
}

export default UseEffect
