const listaDeCompras = {
    articulos: [],

    agregarArticulo: function (articulo) {
        this.articulos.push(articulo);
        return `${articulo} ha sido agregado a la lista.`;
    },

    quitarArticulo: function (articulo) {
        const index = this.articulos.indexOf(articulo);
        if (index !== -1) {
            this.articulos.splice(index, 1);
            return `${articulo} ha sido eliminado de la lista.`;
        } else {
            return `${articulo} no se encuentra en la lista.`;
        }
    },

    verificarExistencia: function (articulo) {
        if (this.articulos.includes(articulo)) {
            return `${articulo} existe en la lista.`;
        } else {
            return `${articulo} no existe en la lista.`;
        }
    },

    mostrarLista: function () {
        let result = "\nLista de Artículos:\n";
        this.articulos.forEach((articulo, index) => {
            result += `${index + 1}. ${articulo}\n`;
        });
        return result.trim();
    }
};

function realizarAccion() {
    const opcionSeleccionada = document.getElementById("opcion").value;
    let resultado = "";

    switch (opcionSeleccionada) {
        case "1":
            const nuevoArticulo = prompt("Ingrese el nuevo artículo:");
            resultado = listaDeCompras.agregarArticulo(nuevoArticulo);
            break;

        case "2":
            const articuloEliminar = prompt("Ingrese el artículo a eliminar:");
            resultado = listaDeCompras.quitarArticulo(articuloEliminar);
            break;

        case "3":
            const articuloVerificar = prompt("Ingrese el artículo a verificar:");
            resultado = listaDeCompras.verificarExistencia(articuloVerificar);
            break;

        case "4":
            resultado = listaDeCompras.mostrarLista();
            break;

        case "0":
            resultado = "Saliendo del programa. ¡Hasta luego!";
            break;

        default:
            resultado = "Opción no válida. Inténtelo de nuevo.";
    }

    document.getElementById("output").textContent = resultado;
}








