document.addEventListener("DOMContentLoaded", () => {
  // Verificando se o DOM foi completamente carregado
  console.log("DOM totalmente carregado");

  const items = document.querySelectorAll(".list .item"); // Todos os itens
  const indicators = document.querySelectorAll(".indicators ul li"); // Pontos indicadores
  const numberDisplay = document.querySelector(".indicators .number"); // Número do indicador
  const prevButton = document.querySelector(".arrows .prev"); // Botão "anterior" (classe .prev)
  const nextButton = document.querySelector(".arrows .next"); // Botão "próximo" (classe .next)

  let currentIndex = 0; // Índice inicial

  // Função para atualizar o item ativo
  const updateActiveItem = (index) => {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index); // Adiciona/remove classe ativa
    });
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index); // Atualiza o indicador ativo
    });
    // Atualiza o número exibido
    numberDisplay.textContent = `${index + 1}`;
  };

  // Listener para o botão "anterior"
  prevButton.addEventListener("click", () => {
    console.log("Botão anterior clicado");
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta ao último, se ultrapassar o início
    updateActiveItem(currentIndex);
  });

  // Listener para o botão "próximo"
  nextButton.addEventListener("click", () => {
    console.log("Botão próximo clicado");
    currentIndex = (currentIndex + 1) % items.length; // Volta ao primeiro, se ultrapassar o final
    updateActiveItem(currentIndex);
  });

  // Inicializa o estado inicial
  updateActiveItem(currentIndex);
});
