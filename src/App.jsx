import './global.css'
import './App.css'
import { Header } from './components/Header'
import { Catalogo } from './components/Catalogo'
import { Footer } from './components/Footer'
 

export function App() {
  
  return (
    <div className='container'>
      <Header />
      <Catalogo />
      <Footer />
    </div>
  )
}

