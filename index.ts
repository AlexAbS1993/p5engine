import { Response, Request, Express } from "express"

const express = require('express')
const cors = require('cors')
const path = require('path')

const distname = '/build'
const app: Express = express()
app.use(cors())
app.use('./source', express.static(__dirname + distname))

app.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.sendFile(path.dirname(__filename) + '/index.html')
})

app.listen(3000, () => {
    console.log("Я включился")
})