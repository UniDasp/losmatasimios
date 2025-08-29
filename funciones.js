document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const numero = document.getElementById("numero");
    const pwd = document.getElementById("pwd");
    const comentarios = document.getElementById("comentarios");

    let isValid = true;

    if (!nombre.value.trim()) {
      nombre.classList.add("is-invalid");
      isValid = false;
    } else {
      nombre.classList.remove("is-invalid");
    }

    if (!apellido.value.trim()) {
      apellido.classList.add("is-invalid");
      isValid = false;
    } else {
      apellido.classList.remove("is-invalid")

    }
    if (!rut.value.trim()) {
      rut.classList.add("is-invalid");
      isValid = false;
    } else {
      rut.classList.remove("is-invalid")
    }

    if (!email.value.trim()) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    if (!numero.value.trim()) {
      numero.classList.add("is-invalid");
      isValid = false;
    } else {
      numero.classList.remove("is-invalid");
    }

    if (!pwd.value.trim()) {
      pwd.classList.add("is-invalid");
      isValid = false;
    } else {
      pwd.classList.remove("is-invalid");
    }

    if (!comentarios.value.trim()) {
      comentarios.classList.add("is-invalid");
      isValid = false;
    } else {
      comentarios.classList.remove("is-invalid");
    }
    if (isValid) {
      alert("Formulario enviado correctamente");
    } else {
      alert("Por favor, corrige los campos marcados");
    }
    return false;
  });
