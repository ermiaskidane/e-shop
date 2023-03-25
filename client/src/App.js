import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Product from './pages/Product'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Shipping from './pages/Shipping'
import Payment from './pages/Payment'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import NotFound from './pages/NotFound'
import PlaceOrder from './pages/PlaceOrder'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
