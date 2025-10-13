import { ValidacionClave } from "../modelo/model.js";

const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  tienePalabrasComunes(clave, commonPasswords)
  tieneMayusculasYMinusculas(clave);
  tieneNumeros(clave);
};


const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (clave !== clave.toLowerCase() && clave !== clave.toUpperCase()) {
    return {esValida: false, error: "La clave debe de tener mayúsculas y minúsculas"};
  } else {
    return {esValida: true}
  }
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  if (commonPasswords.includes(clave)) {
    return { esValida: false, error: "La clave no debe de contener palabras comunes" };
  }
  return { esValida: true};
};

const tieneNumeros = (clave: string): ValidacionClave => {
  for (const char of clave) {
    if (!isNaN(Number(char))) {
      return {esValida: true}
    }
  }
  return {esValida: false}
};



/* Si la clave no tiene mayúsculas y minúsculas, el error será: "La clave debe de tener mayúsculas y minúsculas".
Si la clave no tiene números, el error será: "La clave debe de tener números".
Si la clave no tiene caracteres especiales, el error será: "La clave debe de tener caracteres especiales".
Si la clave no tiene una longitud mínima de 8 caracteres, el error será: "La clave debe de tener una longitud mínima de 8 caracteres".
Si la clave tiene el nombre del usuario, el error será: "La clave no debe tener el nombre del usuario".
Si la clave tiene palabras comunes, el error será: "La clave no debe de contener palabras comunes".
La clave debe de tener mayúsculas y minúsculas.

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  // ...
};
La clave debe de tener números.
const tieneNumeros = (clave: string): ValidacionClave => {
  // ...
};
La clave debe de tener caracteres especiales (@,#,+, _, ...)
const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  // ...
};
La clave debe de tener una longitud mínima de 8 caracteres.
const tieneLongitudMinima = (clave: string): ValidacionClave => {
  // ...
};
La clave no debe tener el nombre del usuario.
const tieneNombreUsuario = (
  nombreUsuario: string
  clave: string,
): ValidacionClave => {
 // ...
};
La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
};
Una vez que tenemos todas las funciones, ya estamos listos para crear la función validarClave que nos devolverá un objeto con dos propiedades:

esValida: booleano, que nos indica si la clave es válida o no.
error: string, que nos devolverá el primer error que encuentre, en caso de que tuviera.
const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
}; */