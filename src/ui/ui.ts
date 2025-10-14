import { validarClave } from "../motor/motor";
import { commonPasswords } from "../modelo/model";

document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById('btn-login')!;
  const usuarioInput = document.getElementById('usuario') as HTMLInputElement;
  const contraseniaInput = document.getElementById('contrasenia') as HTMLInputElement;
  const errorContrasenia = document.getElementById('error-contrasenia')!;

  btnLogin.addEventListener('click', () => {
    const usuario = usuarioInput.value.trim();
    const contrasenia = contraseniaInput.value.trim();

    if (!usuario || !contrasenia) return;

    const resultado = validarClave(usuario, contrasenia, commonPasswords);

    if (!resultado.esValida) {
      errorContrasenia.textContent = resultado.error ?? null;
      errorContrasenia.style.display = 'block';
    } else {
      alert('Usuario y contraseña válidos');
    }
  });
});
