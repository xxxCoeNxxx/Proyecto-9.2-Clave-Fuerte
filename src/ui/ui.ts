import { validarClave } from "../motor/motor";
import { commonPasswords } from "../modelo/model";

const loginForm = document.getElementById('login-form') as HTMLFormElement;
const usuarioInput = document.getElementById('usuario') as HTMLInputElement;
const contraseniaInput = document.getElementById('contrasenia') as HTMLInputElement;
const errorContrasenia = document.getElementById('error-contrasenia')!;

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // evita que se recargue la página

  const usuario = usuarioInput.value.trim();
  const contrasenia = contraseniaInput.value.trim();

  if (!usuario || !contrasenia) return;

  const resultado = validarClave(usuario, contrasenia, commonPasswords);

  if (!resultado.esValida) {
    errorContrasenia.textContent = resultado.error ?? "";
    errorContrasenia.style.display = 'block';
  } else {
    alert('Usuario y contraseña válidos');
  }
});
