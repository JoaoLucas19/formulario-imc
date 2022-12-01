const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório!");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "O email não é válido, tente novamente!");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória!");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Erro! A senha precisa ter no mínimo 8 caracteres!");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmation === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória!");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem, digite novamente!");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";

    if (formIsValid) {
      console.log("O formulário está funcionando perfeitamente!");
    }
  });

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adicionar a mensagem de erro
    small.innerText = message;

    // Adicionar a classe de erro
    formControl.className = "form-control error";
  }

  function setSuccessFor(input, message) {
    const formControl = input.parentElement;

    // Adicionar a classe de Sucesso
    formControl.className = "form-control success";
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}