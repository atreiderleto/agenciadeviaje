import express from 'express';
import router from './routes/index.js';

const app = express();

//definir puerto
const port = process.env.port || 4000;

//habilitar pug

app.set('view engine', 'pug');

//Obtener el Ano actual

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







