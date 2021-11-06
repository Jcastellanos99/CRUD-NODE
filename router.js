import  express from "express";
const router = express.Router();
import conexion from "./Database/DB.js";
import {updateProduct, save, saveCategoria, updateCategoria} from "./controlers/crud.js";


//Mostrar Productos
router.get('/', (req, res)=>{
    conexion.query('SELECT * FROM producto', (er, result)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.render('index', {result:result});
        }
    })
})

//Ruta para crear productos.
router.get('/createProduct', (req, res)=>{
    conexion.query('SELECT * FROM categoria', (er, result)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.render('createProduct', {result:result});
            
        }
    })
})

//Ruta para editar productos
router.get('/editProduct/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM producto WHERE idProducto=?',[id], (er, result)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.render('editProduct', {product:result[0]});
        }
    })
})

//Ruta para eliminar producto
router.get('/deleteProduct/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM producto WHERE idProducto=?',[id], (er, result)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.redirect('/');
        }
    })
})


router.post('/save', save);
router.post('/updateProduct', updateProduct);





//Mostrar Categorias

router.get('/categoria', (req, res)=>{
    conexion.query('SELECT * FROM categoria', (er, results)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.render('categoria', {results:results});
        }
    })
})


//Ruta para crear categoria.
router.get('/createCategoria', (req, res)=>{
    res.render('createCategoria');
})

//Ruta para editar Categoria
router.get('/editCategoria/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM categoria WHERE idCategoria=?',[id], (er, results)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.render('editCategoria', {categoria:results[0]});
        }
    })
})

//Ruta para eliminar categoria
router.get('/deleteCategoria/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM categoria WHERE idCategoria=?',[id], (er, result)=>{
        if(er){
            throw er;
        }else{
            //res.send(result);
            res.redirect('/categoria');
        }
    })
})

router.post('/saveCategoria', saveCategoria);
router.post('/updateCategoria', updateCategoria);

export default router;