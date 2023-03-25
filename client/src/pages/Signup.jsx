import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from '../components/Form'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    const userData = {
      name,
      email,
      password,
      confirmPassword,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      if (password !== confirmPassword) {
        setMessage('password does not match')
      } else {
        const { data } = await axios.post(
          'http://localhost:5002/api/user',
          { name, email, password },
          config
        )

        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
        console.log(data)
      }
    } catch (error) {
      console.log(error.response)
      const err = error.response.data.errors[0].msg
      setMessage(err)
    }
  }
  return (
    <div className=''>
      {message && (
        <h3 className=' text-red-600 capitalize bg-rose-300 w-fit my-0 mx-auto py-1.5 px-3 rounded-lg'>
          {message}
        </h3>
      )}

      <h1 className='uppercase text-2xl text-gray-600 font-normal text-center py-4 lg:text-3xl'>
        Sing Up
      </h1>
      <Form
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        submitHandler={submitHandler}
        nameHandler={setName}
        emailHandler={setEmail}
        passwordHandler={setPassword}
        confirmHandler={setConfirmPassword}
      />
      {/* <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Enter name'
          className='input input-bordered w-3/4 md:w-full md:max-w-md '
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Enter email'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Password'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='comfirmPassword'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit' className='btn '>
          Register
        </button>
      </form>

      <div className='flex justify-center'>
        <p className='text-black pt-4'>
          {' '}
          Have an Account?
          <Link to='/login' className='pl-1 hover:underline'>
            Login
          </Link>
        </p>
      </div> */}
    </div>
  )
}

export default SignUp
