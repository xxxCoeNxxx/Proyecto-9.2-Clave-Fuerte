import { ValidacionClave } from "../modelo/model";

export const validarClave = (nombreUsuario: string, clave: string, commonPasswords: string[]): ValidacionClave => {
  let errores: string[] = [];

  let resultado: ValidacionClave = tieneMayusculasYMinusculas(clave);
  comprobacion(resultado,errores);

  resultado = tienePalabrasComunes(clave, commonPasswords);
  comprobacion(resultado,errores);

  resultado = tieneNumeros(clave);
  comprobacion(resultado,errores);

  resultado = tieneCaracteresEspeciales(clave);
  comprobacion(resultado,errores);

  resultado = tieneLongitudMinima(clave);
  comprobacion(resultado,errores);

  resultado = tieneNombreUsuario(nombreUsuario, clave);
  comprobacion(resultado,errores);

  resultado = tieneEspacios(clave);
  comprobacion(resultado,errores);

  return {
    // True si no hay errores
    esValida: errores.length === 0,
    // Si hay errores, se unen en un string
    error: errores.length > 0 ? errores.join("\n"): undefined
  };
};

const comprobacion = (res: ValidacionClave, errors: string[]): void => {
  if (!res.esValida && res.error) {
    errors.push(res.error);
  }
}

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (clave !== clave.toLowerCase() && clave !== clave.toUpperCase()) {
    return {esValida: true}
  }
    return {esValida: false, error: "La clave debe de tener mayúsculas y minúsculas"};
};

const tienePalabrasComunes = (clave: string, commonPasswords: string[]): ValidacionClave => {
  if (commonPasswords.includes(clave)) {
    return {esValida: false, error: "La clave no debe de contener palabras comunes"};
  }
  return {esValida: true};
};

const tieneNumeros = (clave: string): ValidacionClave => {
  for (const char of clave) {
    if (!isNaN(Number(char))) {
      return {esValida: true};
    }
  }
  return {esValida: false, error: "La clave debe de tener números"};
};

const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const especiales = "!@#$%^&*(),.?\":{}|<>";
  for (const char of clave) {
    if (especiales.includes(char)) {
      return {esValida: true};
    }
  }
  return {esValida: false, error: "La clave debe de tener caracteres especiales"};
};

const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length >= 8) {
    return {esValida: true};
  }
    return {esValida: false, error: "La clave debe de tener una longitud mínima de 8 caracteres"};
};

const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
  if (clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return {esValida: false, error: "La clave no debe tener el nombre del usuario"};
  }
    return {esValida: true};
};

const tieneEspacios = (clave: string): ValidacionClave => {
  if (clave.includes(" ")) {
    return {esValida: false, error: "La clave no debe contener espacios"};
  }
    return {esValida: true};
};