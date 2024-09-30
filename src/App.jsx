
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RestView from './pages/RestView'
import Header from './componenets/Header'
import Footer from './componenets/Footer'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='restaurant_view/:id' element={<RestView  />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
