function mostrarCampo(seleccion) {
    const telefono = document.getElementById('telefonoField');
    const correo = document.getElementById('correoField');

    if (seleccion === 'telefono') {
      telefono.classList.add('active');
      correo.classList.remove('active');
      document.getElementById('telefono').required = true;
      document.getElementById('email').required = false;
    } else {
      correo.classList.add('active');
      telefono.classList.remove('active');
      document.getElementById('email').required = true;
      document.getElementById('telefono').required = false;
    }
  }

document.querySelectorAll('input[name="telefono"], input[name="dni"]').forEach(input => {
input.addEventListener('input', function () {
this.value = this.value.replace(/\D/g, ''); // Reemplaza todo lo que no sea dígito
});
});
document.getElementById('email').addEventListener('input', function () {
const email = this.value;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.getElementById('email-error');

if (!regex.test(email)) {
error.style.display = 'block';
} else {
error.style.display = 'none';
}
});