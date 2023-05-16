const express = require('express')

const app = express()

const port = 8989

app.use(express.static('disponibilidad.hbs'))

app.get('/',(reg, res) => {
    res.sendFile(__dirname+'/disponibilidad.hbs/index.html')
})

app.listen(port, () =>
    console.log(`Escuchando por el puerto ${port}`)
)