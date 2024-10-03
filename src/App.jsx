import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Banner } from '../componentes/Banner'
import { Skills } from '../componentes/Skills'
import { Proyects } from '../componentes/Proyects'
import { Navbar } from '../componentes/Navbar'
import '/componentes/Styles/Style.css'


function App() {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div  className="header">
        <Navbar />
      </div>
      <div className='main'>
        <Banner />
        <Skills />
        <Proyects />
      </div>
      <div className='footer'>
        <h3>thanks for read</h3>
        <button onClick={handleAdd}>{count}</button>
      </div>
    </>
  )
}

export default App
