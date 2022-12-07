const express = require("express")
const app = express()
const { PORT = 8000 } = process.env

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "ejs")

// ... Import Router
const router = require("./router.js")
app.use(router)



app.listen(PORT, () => {
    console.log('server running on port ${PORT}');
})