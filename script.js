function checkLogin(event) {
    event.preventDefault(); // Evita que o formulário seja enviado por padrão
  
    // Pega os valores de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Verifica se o usuário e a senha são 'admin'
    if (username.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
      // Se for 'admin', redireciona para a página admin_control.html
      window.location.href = 'admin_control.html';
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector("#emailInput");
    const telefoneInput = document.querySelector("#telefoneInput");
    const cpfInput = document.querySelector("#cpfInput");
    const form = document.querySelector("#cadastro-form");
  
    form.addEventListener("submit", function(event) {
      let isValid = true;
  
      if (emailInput.value.indexOf('@') === -1) {
        alert("O email precisa conter um '@'.");
        isValid = false;
      }
  
      if (telefoneInput.value.length < 5) {
        alert("O número de telefone precisa ter pelo menos 5 dígitos.");
        isValid = false;
      }
  
      if (cpfInput.value.length < 5) {
        alert("O CPF precisa ter pelo menos 5 dígitos.");
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  });