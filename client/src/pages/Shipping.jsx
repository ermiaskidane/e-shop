import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Shipping() {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    const ShippingAddress = {
      address,
      city,
      postalCode,
      country,
    }
    console.log(ShippingAddress)
    navigate('/payment')
    localStorage.setItem('shippingAddress', JSON.stringify(ShippingAddress))
  }
  return (
    <div className='w-full px-4 lg:w-1/2 xl:w-1/2 mx-auto'>
      <h1 className='uppercase text-2xl text-gray-600 font-normal text-center py-4 lg:text-3xl'>
        Shipping
      </h1>

      <div className='relative rounded-lg bg-white p-8 shadow-lg sm:p-12'>
        <form onSubmit={submitHandler}>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className='border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className='border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='Postal code'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className='border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none'
              required
            />
          </div>
          <div className='mb-6'>
            <input
              type='text'
              placeholder='Country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className='border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none'
              required
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90'
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Shipping
