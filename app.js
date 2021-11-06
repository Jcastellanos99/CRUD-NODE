import './loadEnv.js'
import express, { json } from 'express';
import router from './router.js';

//Puerto de entrada
const PORT = 11000;

//Aplicacion de express
const app = express();

//Definir el sistema de plantillas a utilizar
app.set('view engine', 'ejs');

//Definir la ubicacion de los archivos publicos
app.use(express.static('public'));

app.use(express.urlencoded({extends:false}));
app.use(express(json));

//URL Raiz
app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`SERVER corriendo en ${PORT}`);
});
