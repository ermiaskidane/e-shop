import React, { useState, useEffect } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { image, shipping, payment, userInfo } from '../utility'

function PlaceOrder() {
  const [sdkReady, setSdkReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        'http://localhost:5002/api/config/paypal'
      )
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!window.paypal) {
      addPayPalScript()
    } else {
      setSdkReady(true)
    }
  }, [navigate, userInfo])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    // dispatch(payOrder(orderId, paymentResult))
  }

  return (
    <div>
      <h2 class='mb-4 text-3xl font text-center text-dark sm:text-4xl md:text-[40px]'>
        Place Order
      </h2>
      <div class=' mx-auto mb-[60px] max-w-[510px]  lg:mb-20'>
        <h2 class='mb-2 text-[28px] text-dark'>Shipping</h2>
        <p class='mb-4 text-lg text-dark sm:text-xl md:text-[18px]'>
          <span>Address: </span>
          {shipping.address},{shipping.city},{shipping.postalCode},
          {shipping.country}
        </p>

        <h2 class='mb-2 text-[28px] text-dark'>Payment Method</h2>
        <p class='mb-4 text-lg text-dark sm:text-xl md:text-[18px]'>
          <span>method: </span>
          {payment}
        </p>

        <h2 class='mb-2 text-[28px] text-dark'>Order Items</h2>
        <div class='flex '>
          <img src={image.image} alt='image' className='w-1/4 rounded' />
          <div class='flex-col'>
            <p class='mb-4 ml-6 text-lg text-dark sm:text-xl md:text-[18px]'>
              {image.model}
            </p>
            <p class='mb-4 ml-6 text-lg text-dark sm:text-xl md:text-[18px]'>
              £{image.price}
            </p>
          </div>
        </div>
        {userInfo && (
          <div>
            {loading && <h2>Loading...</h2>}
            {!sdkReady ? (
              <h2>Loading...</h2>
            ) : (
              <PayPalButton
                amount={image.price}
                onSuccess={successPaymentHandler}
              />
            )}
          </div>
        )}
        {/* <div>
          <button
            type='submit'
            className='w-full mt-6 rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90'
          >
            Continue
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default PlaceOrder
