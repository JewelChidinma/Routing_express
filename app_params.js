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