import express from "express"
import jwt from "jsonwebtoken"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())
app.listen(4000)
