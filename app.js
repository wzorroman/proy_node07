const express = require('express')
const hbs = require('hbs')
const app = express()

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(express.static(`${__dirname}/public`))

// HBS engine
// indica al HBS ubicacion de los parciales
hbs.registerPartials(`${__dirname}/views/parciales`)
app.set('view engine', 'hbs');

//routes
app.get('/', function (req, res) {
    // res.send('solicitud cambiada')
    res.render('index');
})
app.get('/clientes', function (req, res) {
    // res.send('solicitud cambiada')
    res.render('clientes');
})


app.listen(app.get('port'), () => {
    console.log(`Servidor inicializado port: ${app.get('port')}`);
})