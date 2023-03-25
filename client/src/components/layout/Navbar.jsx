import { SiAcm } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Navbar() {
  // const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate()

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  // useEffect(() => {
  //   if (refresh) {
  //     navigate('/')
  //   }

  //   return () => {
  //     console.log('unmounted data')
  //   }
  // }, [refresh])

  const LogoutHandler = () => {
    localStorage.removeItem('userInfo')
    navigate('/login')
    // setRefresh((prevState) => !prevState)
  }
  return (
    <nav className='navbar  shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <SiAcm className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle'>
            Device Shop
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>

            <Link className='btn btn-ghost btn-sm rounded-btn'>
              <AiOutlineShoppingCart />
              <span>Cart</span>
            </Link>

            {userInfo ? (
              <>
                <p className='btn btn-ghost btn-sm rounded-btn'>
                  {userInfo.name}
                </p>
                <button
                  className='btn btn-ghost btn-sm rounded-btn'
                  onClick={LogoutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to='/login' className='btn btn-ghost btn-sm rounded-btn'>
                  Login
                </Link>
                <Link to='/signup' className='btn btn-ghost btn-sm rounded-btn'>
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
