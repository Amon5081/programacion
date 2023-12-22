//objetivo:hacer un script que le pregunte al usuario que quiere comprar y le de el producto y el precio del mismo

alert("Bienvenido a la tienda Mundo moda, a continuacion se le mostrara un repertorio de ropa para comprar");

let producto = Number(prompt("Ingrese el numero del producto que desea comprar: Camisa: 0 Pantalon: 1 Zapatos: 2 Medias: 3"));

const Ropa = [
    {
        Nombre: "Camisa",
        Precio: 1500,
    },
    {
        Nombre: "Pantalon",
        Precio: 2500,
    },
    {
        Nombre: "Zapatos",
        Precio: 3000,
    },
    {
        Nombre: "Medias",
        Precio: 500,
    },
];

if (producto >= 0 && producto < Ropa.length) {
    alert("Producto seleccionado: " + Ropa[producto].Nombre + "\nPrecio: $" + Ropa[producto].Precio);
} else {
    alert("Número de producto no válido. Por favor, elija un número entre 0 y " + (Ropa.length - 1));}










