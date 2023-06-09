const registerForm = document.getElementById('register-form');
const profileColorButtons = document.querySelectorAll('.profile-color-button');

profileColorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del botón (envío del formulario)

    profileColorButtons.forEach((btn) => {
      btn.classList.remove('selected');
    });

    const selectedButton = e.target;
    selectedButton.classList.add('selected');

    const selectedImageUrl = selectedButton.dataset.imgUrl;
    // Puedes utilizar la URL de la imagen seleccionada para realizar cualquier acción adicional
  });
});

