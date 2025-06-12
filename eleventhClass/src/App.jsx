import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Layout from './component/Layout'
import Navbar from './component/Navbar'
import Navbar1 from './component/Navbar1'
import Student from './component/Student'
import Child1 from './component/Child1'
import Child2 from './component/Child2'
import NotFound from './component/NotFound'
import { ProtectedRoute } from './component/ProtectedRoute'
import { useEffect, useState , useRef} from 'react'

const routing = createBrowserRouter([
  { 
    path: '/',
    element: 
    <>
      <Navbar1 />
      <hr />
      <Navbar />
      <Home />
    </>
  },
  {
    path: '/about',
    element:
    <>
      <ProtectedRoute>
      <Navbar1 />
      <hr />
      <Navbar />
      <About />
      </ProtectedRoute>
    </>
  },
  {
    path: '/contact',
    element:
    <>
      <ProtectedRoute>
      <Navbar1 />
      <hr />
      <Navbar />
      <Contact />
      </ProtectedRoute>
    </>
  },
  {
    path: '/Layout',
    element:
    <>
      <ProtectedRoute>
      <Navbar1 />
      <hr />
      <Navbar />
      <Layout />
      </ProtectedRoute>
    </>,
    children:[
      {
        path: 'child1',
        element: 
        <>
          <Child1 />
        </>
      },
      {
        path: 'child2',
        element: 
        <>
          <Child2 />
        </>
      }
    ]
  },
  {
    path: '/student/:id',
    element:
    <>
      <ProtectedRoute>
      <Navbar1 />
      <hr />
      <Navbar />
      <Student /> 
      </ProtectedRoute>
    </>
  },
  {
    path: '*',
    element:
    <>
      <NotFound />
    </>
  }
])

function App() {

  const [count , setCount] = useState(0);
  let shailja = useRef(0);

  function Increment(){
    setCount(count + 1);
    shailja.current = shailja.current + 1;
    console.log("shailja : " ,shailja);
  }

  useEffect(() => {
    console.log("re-render from app.jsx");
  })

  return (
    <>
      <RouterProvider router={routing} />
      <button onClick={Increment}>Count : {count}</button>
    </>
  )
}

export default App
