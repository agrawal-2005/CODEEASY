import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "Code-Editor"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,   })
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

export default connectDB


