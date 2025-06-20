const express = require("express")
const bodyParser = require("body-parser")

const PORT = 5000
const app = express()

const users = [
    {
        id: 1,
        name: "Mma",
        age: 30
    },
    {
        id: 2,
        name: "Bechi",
        age: 28
    }
]

const posts = [
    {
        id: 1,
        title: "Post 1",
        body: "This is post 1"
    },
     {
        id: 2,
        title: "Post 2",
        body: "This is post 2"
    }
]

app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.end("Home Page")
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === parseInt(id))
    if (!user) {
        res.status(404).send("User not found")
    }
    res.send(user)
})

app.get("/users/:id/:name", (req, res) => {
    const id = req.params.id
    const name = req.params.name
    const user = users.find(user => user.id === parseInt(id) && user.name === name)
    if (!user) {
        res.status(404).send("User not found")
    }
    res.json(user)
})

app.get("/posts/:id([0-9]+)", (req, res) => {
    const id = req.params.id
    const post = posts.find(post => post.id === parseInt(id))

    if (!post) {
        res.status(404).send("Post not found")
    }
    res.json(post)
})

app.get("/query", (req, res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`Hello ${name}! You are ${age} years old`)
})


app.post("/profile", (req, res) => {
    const name = req.query.name
    const age = req.query.age
    res.send(`Hello ${name}! You are ${age} years old`)
})

app.get('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});