import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config()

connectDB()
.then(() => {
    app.litsen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB conenction failed : ", error);
})