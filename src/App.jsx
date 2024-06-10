import { useState } from 'react'
import './App.css';
import Header from "./component/Header/header"
import RouterConfig from './navigation/routerconfig';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <RouterConfig/>
    </>
  )
}

export default App
