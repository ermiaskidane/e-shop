import mongoose from 'mongoose'

//  connecting to my database
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    console.log(`MongoDB Connected: `.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
