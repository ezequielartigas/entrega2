
// Objetos
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerSubtotal() {
        return this.precio * this.cantidad;
    }
}

// Funciones
function obtenerProductoPorNombre() {
    let nombreProducto = prompt("Ingrese el nombre del producto que quiere modificar");

    let productoEncontrado = productos.find( (el) => {
        return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
    });

    // Mientras el find no encuentre nada y devuelva undefined quedamos encerrados en el while
    while(productoEncontrado === undefined) {
        alert("PRODUCTO NO EXISTE");

        nombreProducto = prompt("Ingrese el nombre del producto que quiere modificar");

        productoEncontrado = productos.find( (el) => {
            return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
        });
    }

    return productoEncontrado;
}

function modificarProducto() {
    const productoEncontrado = obtenerProductoPorNombre();

    const nuevoPrecio = parseFloat(prompt("Ingrese nuevo precio"));
    const nuevaCantidad = parseInt(prompt("Ingrese nueva cantidad"));

    productoEncontrado.precio = nuevoPrecio;
    productoEncontrado.cantidad = nuevaCantidad;

    alert("PRODUCTO MODIFICADO");
}

function mostrarTotal() {
    const total = productos.reduce( (acc, el) => {
        // Forma 1
        // return acc + (el.cantidad * el.precio);

        // Forma 2
        return acc + el.obtenerSubtotal();
    }, 0);

    alert("EL TOTAL ES: $" + total);
}

function obtenerNombreDeProductoUnico() {
    let nombreProducto = prompt("Ingrese nombre de producto");

    let productoExiste = productos.some( (el) => {
        return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
    });

    while(productoExiste) {
        alert("PRODUCTO YA EXISTE!");
        nombreProducto = prompt("Ingrese nombre de producto");
        productoExiste = productos.some( (el) => {
            return el.nombre.toLowerCase() === nombreProducto.toLowerCase();
        });
    }

    return nombreProducto;
}

function crearProducto() {
    // Pedimos los datos del producto
    const nombreProducto = obtenerNombreDeProductoUnico();
    const precioProducto = parseFloat(prompt("Ingrese precio de producto"));
    const cantidad = parseInt(prompt("Ingrese cantidad"));

    // Creamos el producto
    const producto = new Producto(
        nombreProducto,
        precioProducto,
        cantidad,
    );

    // Agregamos el producto al array
    productos.push(producto);

    alert("PRODUCTO AGREGADO");
}

function opcionValida() {

    // Chequeamos si la opción es menor a 0 o mayor a 3
    while(opcion < 0 || opcion > 3) {
        alert("OPCIÓN INVÁLIDA");
        opcion = parseInt(prompt(opciones));
    }

    // Si ingresó 0 para SALIR, retornamos false
    if(opcion === 0) {
        alert("SALIR");
        return false;
    }

    return true;
}

// Inicio del programa
const productos = [
    new Producto("Termotanques", 20, 2),
    new Producto("Griferias", 30, 3),
    new Producto("Tanques de agua", 50, 4),
];

const opciones = "1- Crear un producto, 2- Mostrar total de productos, 3- Modificar producto, 0- Salir";
let opcion = parseInt(prompt(opciones));

while(opcionValida()) {

    switch(opcion) {
        case 1:
            crearProducto();
            break;

        case 2:
            mostrarTotal();
            break;

        case 3:
            modificarProducto();
            break;
    }

    // Volver a pedir la opción para no quedarse en un bucle infinito
    opcion = parseInt(prompt(opciones));
}