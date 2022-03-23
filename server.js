const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello, World! Today is a wonderful today')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
