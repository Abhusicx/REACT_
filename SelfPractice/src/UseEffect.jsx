import { useEffect } from 'react'

const UseEffect = () => {

    const [count , setCount] = useState(0);
    const [total , setTotal] = useState(1);

    //runs on every render
    // useEffect(() => {
    //     alert("hello");
    // })

    //runs on only first render
    // useEffect(() => {
    //     alert("hello");
    // }, [])

    //whenever count updates i'll render
    // useEffect(() => {
    //     alert("hello");
    // }, [count])

    //multiple dependency
    // useEffect(() => {
    //     alert("hello");
    // }, [count , total])

    //clean up
    useEffect(() => {
        alert(`hello ${count}`);
        return () => {
            alert(`bye ${count}`);
        }
    }, [count])

    function handleClick(){
        setCount(count + 1);
        setTotal(total + 1);
    }

  return (
    <div>
      <button onClick={handleClick}>Count : {count}</button>
      <button onClick={handleClick}>Total : {total}</button>
    </div>
  )
}

export default UseEffect
