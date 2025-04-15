const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User list")
})

router.post("/", (req, res) => {
    res.send("Create User")
})

router.get('/:id', (req, res) => {
    req.params.id
    res.send(`Get user with ID ${req.params.id}`)
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

module.exports = router