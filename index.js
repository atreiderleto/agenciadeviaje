import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();


// conectar la DB

db.authenticate()
    .then(() => console.log('Base de Datos Conectada'))
    .catch(error => console.log('error'));

//definir puerto
const port = process.env.port || 4000;

//habilitar pug

app.set('view engine', 'pug');

//Obtener el Año actual

app.use((req, res, next) => {

    const year = new Date();

    res.locals.ActualYear = year.getFullYear(); 
    res.locals.nombresitio = "Agencia de Viajes";
    next();
});

//definir la carpeta publica

app.use(express.static('public'));

//agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`EL servidor esta corriendo en el puerto ${port}`);
});







