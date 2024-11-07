import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Fahad!')
})
app.get('/about', (req, res) => {
  res.send('About!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})