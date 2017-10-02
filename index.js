const express = require('express')

const app = express()

// GET method route
app.get('/', (req, resp) => {
    resp.send('Hello World')

})

app.all('/health', (req, resp) => {
resp.send('ok')
})

app.listen(8090)