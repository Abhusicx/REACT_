import { use, useEffect, useState } from 'react'

const Component = ({metadata1, metadata2}) => {

    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);

    //case 1 : runs on every render
    useEffect(() => {
        console.log("runs on every render");
    })

    //case 2 : runs on first render only 
    useEffect(() => {
        console.log("run on very first render")
    }, [])

    //case 3 : runs whenever the data changes 
    useEffect(() => {
        console.log("run whenever the data changes")
    }, [data])

    //case 4 : runs whenever either data changes or data 1 changes 
    useEffect(() => {
        console.log("run whenever either data changes or data 1 changes")
    }, [data, data1])

    //case 5 : runs whenever the prop data changes
    useEffect(() => {
        console.log("run whenever the prop data changes")
    }, [metadata1, metadata2])

    //case 6 : runs whenever the component got unmount
    useEffect(() => {
        console.log("runs whenever component got mount")
        return () => {
            console.log("run whenever the component got unmount")
        } //clean up function
    }, [metadata1])

  return (
    <div>
      <button onClick={() => setData(data + 1)}>Data : {data}</button>
      <hr /><hr />
      <button onClick={() => setData1(data1 + 1)}>Data1 : {data1}</button>
      <hr /><hr />
      <h1>{metadata1}</h1>
      <hr /><hr />
      <h1>{metadata2}</h1>
    </div>
  )
}

export default Component
