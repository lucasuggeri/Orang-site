const campos = document.querySelectorAll(".form-control");
const feedbacks = document.querySelectorAll('.invalid-feedback');
const button = document.querySelector('#sendButton');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function markAsInvalid(input) {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  input.focus();
}

function markAsValid(input) {
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');
}

button.addEventListener('click', (e) => {
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    const feedback = feedbacks[i];

    if (campo.value.trim().length < 3) {
      markAsInvalid(campo);
      feedback.style.display = 'block';
      e.preventDefault()
    } else {
      markAsValid(campo);
      feedback.style.display = 'none';

    }
  }

  if (!emailRegex.test(campos[1].value)) {
    markAsInvalid(campos[1]);
    feedbacks[1].style.display = 'block';
    e.preventDefault()
  } else {
    markAsValid(campos[1]);
    feedbacks[1].style.display = 'none';
  }

  // se todos os campos estiverem válidos, envia o formulário
  if (document.querySelectorAll('.is-invalid').length === 0) {
    document.querySelector('#form').submit();
  }
});
