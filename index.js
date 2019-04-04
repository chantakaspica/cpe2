const express = require('express')
const app = express()
const port = 8042

app.get('/', (req, res) =>
  res.send('Greetings from SURAT...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
