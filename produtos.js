// const stars = document.querySelectorAll('.star');
          
// stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//         const starRating = star.getAttribute('data-star');
//         alert(`Você avaliou com ${starRating} estrelas.`);
//         // Adicione a classe 'filled' para mudar o ícone da estrela clicada
//         star.classList.add('filled');
//         star.src = "https://img.icons8.com/small/25/ffcb0c/filled-star.png";
//         // Adicione a classe 'filled' e altere o ícone para todas as estrelas anteriores
//         for (let i = 0; i < index; i++) {
//             stars[i].classList.add('filled');
//             stars[i].src = "https://img.icons8.com/small/25/ffcb0c/filled-star.png";
//         }
//     });
// });
              

// Arquivo JavaScript para controlar o contador de quantidade de produtos

// Obtém o elemento de input de quantidade e os botões de incremento e decremento
var quantityInput = document.getElementById('quantity');
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

// Adiciona um ouvinte de evento de clique ao botão de incremento
incrementButton.addEventListener('click', function() {
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

// Adiciona um ouvinte de evento de clique ao botão de decremento
decrementButton.addEventListener('click', function() {
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});
