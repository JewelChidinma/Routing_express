const express = require("express")

const PORT = 5000
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.end('Home page')
})

app.get("/about", (req, res) => {
    res.end("About page")
})

app.get("/contact", (req, res) => {
    res.end("Contact page")
})


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})