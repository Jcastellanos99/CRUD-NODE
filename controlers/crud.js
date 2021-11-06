import conexion from '../Database/DB.js';



export function save(req, res){
    const name = req.body.nombre;
    const price = req.body.precio;
    const stock = req.body.cantidad;
    const type = req.body.categoria;
    conexion.query('INSERT INTO producto SET ?',{nombreProducto:name, precio:price, cantidad:stock, idcategoria:type}, (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
    })
}

export function updateProduct(req, res){
    const id = req.body.id;
    const name = req.body.nombre;
    const price = req.body.precio;
    const stock = req.body.cantidad;
    const type = req.body.categoria;
    conexion.query('UPDATE producto SET ? WHERE idProducto = ?', [{nombreProducto:name, precio:price, cantidad:stock, idcategoria:type}, id], (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
    })
}

export function saveCategoria(req, res){
    const name = req.body.nombreCategoria;
    const description = req.body.descripcion;
    conexion.query('INSERT INTO categoria SET ?',{nombreCategoria:name, descripcion:description}, (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/categoria');
            }
    })
}


export function updateCategoria(req, res){
    const id = req.body.id;
    const name = req.body.nombreCategoria;
    const description = req.body.descripcion;
    conexion.query('UPDATE categoria SET ? WHERE idCategoria = ?', [{nombreCategoria:name, descripcion:description}, id], (error, result)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/categoria');
            }
    })
}