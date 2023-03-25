import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StrictMode } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  'pk_test_51FHB6OGz03sGbVedlC1ff100OkjB288VNAj7JvPGtlyQxKX8oP6KRP18j6DVdPGvPRcpNH7Fzc9U6EKBOOWGNdgq006BYwbRqZ'
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>
  </StrictMode>
)
