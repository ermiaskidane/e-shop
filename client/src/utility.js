const image = localStorage.getItem('image')
  ? JSON.parse(localStorage.getItem('image'))
  : null

const shipping = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : null

const payment = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : null

const userInfo = JSON.parse(localStorage.getItem('userInfo'))

export { image, shipping, payment, userInfo }
