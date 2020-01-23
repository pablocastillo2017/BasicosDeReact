import React from 'react';

const Producto = ({producto ,carrito ,agregarProducto ,productos}) => {

    const{nombre,precio,id} = producto

    // Funcion para Agregar Producto Al carrito

    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id )[0];
        agregarProducto([
            // (...) Spread Operator Clona o Copia el Arreglo completo de los productos que existan en el carrito
            // para no perder los elementos que ya estan en el carrito
            ...carrito,
            producto
        ]);
    }

    return ( 
        <div>

            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button type="button" onClick={()=> seleccionarProducto(id)}>
                
                Comprar
                
                </button> 
            

        </div>
    );
}
 
export default Producto ;