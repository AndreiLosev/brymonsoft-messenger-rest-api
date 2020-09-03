const express = require('express')
const path = require('path');
const app = express();

app.use(express.json())










app.use(express.static(path.resolve(__dirname, '../..','client','build')))
app.get('/', (_, response) => {
    response.send(path.resolve(__dirname, '../..','client','build', 'index.html'))
})
app.listen(4000, () => console.log('server start....'))
