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
  