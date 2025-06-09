import { useState , createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/Component'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'
import A from './components/A'

const UseContextKaShare = createContext();

function App() {
    // const [data3, setData3] = useState(0);
    // const [data4, setData4] = useState(0);

    const [share, setShare] = useState(0);
  return (
    <>
      {/* <button onClick={() => setData3(data3 + 1)}>Data3 : {data3}</button>
      <hr /><hr />
      <button onClick={() => setData4(data4 + 1)}>Data4 : {data4}</button>
      <hr /><hr />
      <Component metadata1 = {data3} metadata2 = {data4}/> */}

      
      {/* <ChildA share={share} setShare = {setShare}/>
      <ChildB share={share} /> */}
      <h1>App.jsx : {share}</h1>
      <button onClick={() => setShare(share + 1)}>Share : {share}</button>
      <UseContextKaShare.Provider value = {share} >
       <A/>
      </UseContextKaShare.Provider >
    </>
  )
}

export default App
export {UseContextKaShare}