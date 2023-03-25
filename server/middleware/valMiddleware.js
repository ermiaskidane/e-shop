import asyncHandler from 'express-async-handler'

const Validate = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  if (!name || !email || typeof password !== Number) {
    next('invalid input')
  } else {
    next()
  }
}
export default Validate
// module.exports = Validate
