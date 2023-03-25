import React from 'react'

import { Link } from 'react-router-dom'

function Form({
  submitHandler,
  nameHandler,
  emailHandler,
  passwordHandler,
  confirmHandler,
  name,
  email,
  password,
  confirmPassword,
}) {
  return (
    <>
      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Enter name'
          className='input input-bordered w-3/4 md:w-full md:max-w-md '
          value={name}
          onChange={(e) => nameHandler(e.target.value)}
        />
        <input
          type='email'
          placeholder='Enter email'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={email}
          onChange={(e) => emailHandler(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Password'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={password}
          onChange={(e) => passwordHandler(e.target.value)}
        />
        <input
          type='password'
          placeholder='comfirmPassword'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={confirmPassword}
          onChange={(e) => confirmHandler(e.target.value)}
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
      </div>
    </>
  )
}

export default Form
