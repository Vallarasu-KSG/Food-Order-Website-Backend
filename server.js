import express from "express"
import cors from "cors"
import { mongoDB } from "./config/db.js"
import foodRouter from "./routes/FoodRoute.js"
import UserRoute from "./routes/UserRoute.js"
import 'dotenv/config'
import CartRoute from "./routes/CartRoute.js"
import orderRouter from "./routes/OrderRoute.js"
import router from "./routes/ContactRoute.js"

// app config
const app = express()
const port = 4001;

// middleware
app.use(express.json())
app.use(cors())
    
app.get("/",(req, res)=>{
    res.send("api working")
})

// server connection
app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})

// mongoDB connection
mongoDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", UserRoute)
app.use("/api/cart", CartRoute)
app.use("/api/order", orderRouter)

app.use("/api/contact", router)
