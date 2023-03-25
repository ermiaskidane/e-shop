import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('Stripe')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(paymentMethod)
    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))
    navigate('/placeorder')
  }
  return (
    <div className='w-full px-4 lg:w-1/2 xl:w-1/2 mx-auto'>
      <h1 className=' text-2xl text-gray-600 font-normal text-center  lg:text-3xl'>
        Payment Method
      </h1>
      <form onSubmit={submitHandler} className='mx-auto'>
        <div className='mb-6 mx-auto'>
          <input
            type='radio'
            id='Stripe'
            value='Stripe'
            name='paymentMethod'
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            checked
          />
          <label htmlFor='Stripe'>Stripe</label>
        </div>
        <div className='mb-6'>
          <input
            type='radio'
            id='paypay'
            value='PayPal'
            name='paymentMethod'
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          />
          <label htmlFor='paypay'>PayPal or Credit Card</label>
        </div>

        <div>
          <button
            type='submit'
            className='w-max rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90'
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
