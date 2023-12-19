//crear un bucle que escriba los numeros hasta el valor introducido por el usuario

//bucle 

let contar, max, msg = '';
max = parseInt(prompt("Teclear un número entero"));
for (contar = 0; contar < max; contar++) {
    msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);