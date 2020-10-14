const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');

const app = express();

//SETTINGS

//obtiene el puerto automaticamente y sino coge el puerto 3000 que fue el que le di por default*
app.set('port',process.env.PORT || 3000);


//MIDDERWARES

//habilita para obtener  200 5.721 ms - 128 estos datos en la consola de las peticiones
app.use(morgan('dev'));
//habilita para que esta shit use jsons*
app.use(express.json());
//cors
app.use(cors({origin: 'http://localhost:4200'}));



//ROUTES

//da el prefijo que tu quieras , enlaza a las rutas*
app.use(require('./routes/route'));

//STARING THE SERVER

//muestra el puerto y mensaje si tu quieres gracias de nada
app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'));
    });
    