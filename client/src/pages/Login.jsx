import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useLocation, redirect } from 'react-router-dom'
import axios from 'axios'
import Form from '../components/Form'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const location = useLocation()

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  const redirects = location.search ? location.search.split('=')[1] : '/'
  console.log(redirects)
  //  if user already login
  useEffect(() => {
    if (userInfo) {
      navigate(`${redirects}`)
    }
  }, [navigate, userInfo, redirects])

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'http://localhost:5002/api/user/login',
        { email, password },
        config
      )
      console.log(data)

      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(`/${redirects}`)
    } catch (error) {
      console.log(error.message)
      const err = error.message
      setMessage(err)
    }
  }

  return (
    <div className=' '>
      {message && (
        <h3 className=' text-red-600 capitalize bg-rose-300 w-fit my-0 mx-auto py-1.5 px-3 rounded-lg'>
          {message}
        </h3>
      )}
      <h1 className='uppercase text-2xl  text-gray-600 font-normal text-center py-4 lg:text-3xl'>
        Login
      </h1>

      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Enter Email'
          className='input input-bordered w-3/4 md:w-full md:max-w-md '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter password'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn  '>
          Login
        </button>
      </form>

      <div className='flex justify-center'>
        <p className='text-black pt-4'>
          {' '}
          New Customer?
          <Link to='/signup' className='pl-1 hover:underline'>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
