import { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  const URI_DB = process.env.URI_DB
  try {
    await connect(URI_DB)
    console.log("Conectado con éxito a Mongo DB")
  } catch (e) {
    console.log("Error al conectarse a MongoDB")
    process.exit(1)
  }
}



export default connectDB