// Dados de produtos para a busca (adicione todos os produtos aqui)
const produtosData = [
    { nome: "Apple iPhone 15 Pro", id: "iphone-15-pro" },
    { nome: "Samsung Galaxy S23 Ultra", id: "samsung-s23-ultra" },
    { nome: "Xiaomi Poco C75", id: "xiaomi-poco-c75" }, // Exemplo de ID para este produto
    { nome: "Apple iPhone 15", id: "iphone-15" },
    { nome: "Apple iPhone 16", id: "iphone-16" },
    { nome: "Apple iPhone 14", id: "iphone-14" },
    { nome: "Smartphone Samsung Galaxy A05s", id: "samsung-a05s" },
    { nome: "Samsung Galaxy A25 5G", id: "samsung-a25" },
    { nome: "Kit Camera De Re Automotiva", id: "camera-de-re" },
    { nome: "Shiny Revitalizador Pneu Pretinho Longa Duração", id: "revitalizador-pneu" },
    { nome: "Massa De Polir Luxcar Tira Riscos", id: "massa-polir" },
    { nome: "Caneta Retok Tira Riscos Automotivos Diversas Cores Luxcar Cor Preto", id: "caneta-retok-preto" },
    { nome: "Caneta Retok Tira Riscos Automotivos Diversas Cores Luxcar Cor Prateado", id: "caneta-retok-prata" },
    { nome: "Carregador de Bateria 12V Automotivo e Moto 300Ah", id: "carregador-automotivo" },
    { nome: "Líquido refrigerante/anticongelante Paraflu 10-3004 ADITIVO", id: "aditivo-paraflu" },
    { nome: "Caneta Tira Riscos Luxcar Para Carros Pneus Rodas Móveis Cor Vermelho", id: "caneta-retok-vermelho" },
    { nome: "Jogo De Soquete Aço Crv 1/4 Catraca Chave Allen C/ Maleta", id: "jogo-soquete" },
    { nome: "Capa De Chuva Moto Pioneira Impermeável Pvc Motoqueiro Frio", id: "capa-chuva-moto" },
    { nome: "Modulo Taramps Ts400x4 Amplificador 400w Digital", id: "modulo-taramps" },
    { nome: "Trava Anti Furto Segurança Aço Volante Direção Pedal Veículo", id: "trava-volante" },
    { nome: "Aspirador de Pó Turbo", id: "aspirador-po" },
    { nome: "Computador Completo Intel Core i7", id: "computador-i7" },
    { nome: "Computador Completo Fácil Office Intel Core I5", id: "computador-i5-office" },
    { nome: "Computador Completo 2Eletro Top Intel Core i5", id: "computador-i5-2eletro" },
    { nome: "Computador Completo I5 3º G 8gb Hd Ssd", id: "computador-i5-3g" },
    { nome: "Pc Gamer Completo 2eletro Go I7", id: "pc-gamer" },
    { nome: "Notebook Gamer Acer Nitro V15", id: "acer-nitro-v15" },
    { nome: "Notebook Acer Aspire 5 Intel Core I5", id: "acer-aspire-5" },
    { nome: "Monitor Gamer Aoc 21.5'' Full Hd Gaming 120hz", id: "monitor-aoc-21" },
    { nome: "Monitor Gamer 27 27g4/p 180hz", id: "monitor-aoc-27" },
    { nome: "Monitor Led 17.1 Polegadas + Kit Teclado E Mouse Sem Fio", id: "kit-monitor-teclado" },
    { nome: "Smart TV 50” 4K", id: "smart-tv-50" },
    // Adicione todos os produtos do seu HTML aqui com seus IDs
];

function buscarProduto() {
    const termo = document.getElementById("campoPesquisa").value.toLowerCase();
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    if (termo.trim() === "") {
        resultadosDiv.style.display = "none";
        return;
    }

    const encontrados = produtosData.filter(p => p.nome.toLowerCase().includes(termo));

    if (encontrados.length === 0) {
        resultadosDiv.innerHTML = "<p>Nenhum produto encontrado.</p>";
    } else {
        encontrados.forEach(produto => {
            const item = document.createElement("div");
            item.classList.add("resultado-item");
            item.textContent = produto.nome;
            item.onclick = () => {
                const destino = document.getElementById(produto.id);
                if (destino) {
                    // Oculta a div de resultados
                    resultadosDiv.style.display = "none";
                    // Rola até a categoria do produto, se estiver oculta
                    const categoriaSec = destino.closest('.categoria-section');
                    if (categoriaSec && categoriaSec.style.display === 'none') {
                        mostrarCategoria(categoriaSec.id);
                    }
                    // Rola até o produto
                    destino.scrollIntoView({ behavior: "smooth", block: "center" });
                    // Opcional: Adicionar um destaque temporário ao card encontrado
                    destino.style.outline = '2px solid #3483fa';
                    setTimeout(() => {
                        destino.style.outline = 'none';
                    }, 3000);
                }
            };
            resultadosDiv.appendChild(item);
        });
    }

    resultadosDiv.style.display = "block";
}

// Fechar resultados da busca ao clicar fora
document.addEventListener('click', (event) => {
    const resultadosDiv = document.getElementById("resultados");
    const campoPesquisa = document.getElementById("campoPesquisa");
    if (!resultadosDiv.contains(event.target) && !campoPesquisa.contains(event.target)) {
        resultadosDiv.style.display = "none";
    }
});


// Funções do Carrossel de Destaque
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let autoScrollInterval;

function getVisibleCount() {
    if (window.innerWidth <= 768) return 1; // 1 item em mobile
    if (window.innerWidth <= 1024) return 2; // 2 itens em tablet
    return 3; // 3 itens em desktop
}

function updateCarousel(direction = 0) {
    const items = Array.from(track.children);
    const visibleCount = getVisibleCount();
    const totalItems = items.length;

    // Atualiza o índice baseado na direção
    if (direction === 1) { // Next
        if (currentIndex < totalItems - visibleCount) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o início se chegar ao fim
        }
    } else if (direction === -1) { // Prev
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleCount; // Vai para o fim se chegar ao início
        }
    }

    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Reinicia o auto-scroll
    resetAutoScroll();
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => updateCarousel(1), 4000); // Rola a cada 4 segundos
}

// Event Listeners para botões do carrossel
if (nextButton) {
    nextButton.addEventListener('click', () => updateCarousel(1));
}
if (prevButton) {
    prevButton.addEventListener('click', () => updateCarousel(-1));
}

// Inicializa o carrossel na carga da página e redimensionamento
window.addEventListener('load', () => {
    currentIndex = 0; // Garante que começa no primeiro item
    updateCarousel();
    resetAutoScroll(); // Inicia o auto-scroll
});
window.addEventListener('resize', () => {
    currentIndex = 0; // Reseta para o início ao redimensionar
    updateCarousel();
    resetAutoScroll(); // Reinicia o auto-scroll no redimensionamento
});


// Função para mostrar/ocultar menu hamburguer (mobile)
function toggleMenu() {
    const menu = document.getElementById("menuCategorias");
    menu.classList.toggle("show");
}

// Funções para mostrar subcategorias e categorias
const categoriasData = {
    celulares: {
        titulo: "Tecnologia > Celulares",
        itens: ["Samsung", "Apple", "Motorola", "Xiaomi"]
    },
    "acessorios-Veiculos": { // Chave corrigida para corresponder ao ID HTML
        titulo: "Acessórios para Veículos",
        itens: ["Pneus", "Acessórios"]
    },
    lar: {
        titulo: "Casa e Lar",
        itens: ["Eletrodomésticos", "Móveis", "Decoração"]
    },
    informatica: {
        titulo: "Informática",
        itens: ["Computadores", "Notebooks", "Periféricos", "Fontes", "Monitores", "Placa de Vídeo"]
    },
    televisores: {
        titulo: "Televisores",
        itens: ["Smart TVs", "LED", "4K", "Suportes"]
    }
};

function mostrarCategoria(categoriaId) {
    const secoes = document.querySelectorAll('.categoria-section');
    secoes.forEach(secao => secao.style.display = 'none'); // Oculta todas

    const categoriaAtiva = document.getElementById(categoriaId);
    if (categoriaAtiva) {
        categoriaAtiva.style.display = 'block'; // Mostra a categoria selecionada
        categoriaAtiva.scrollIntoView({ behavior: "smooth", block: "start" }); // Rola até a categoria
    }

    const subcategoriasDiv = document.getElementById("subcategorias");
    const dados = categoriasData[categoriaId];

    if (dados) {
        let html = `<h3>${dados.titulo}</h3><ul>`;
        dados.itens.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += "</ul>";
        subcategoriasDiv.innerHTML = html;
        subcategoriasDiv.style.display = "block";
    } else {
        subcategoriasDiv.style.display = "none"; // Oculta se não houver subcategorias
    }

    // Fecha o menu hamburguer após selecionar uma categoria no mobile
    const menu = document.getElementById("menuCategorias");
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
}

// Mostrar categoria inicial (Celulares por padrão) ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    mostrarCategoria('celulares');

    // Inicializa carrosséis de imagens dentro dos cards
    document.querySelectorAll('.carousel-card-images').forEach(carouselContainer => {
        const images = carouselContainer.querySelectorAll('img');
        let currentImageIndex = 0;

        const updateCardCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('hidden', index !== currentImageIndex);
            });
        };

        const prevCardBtn = carouselContainer.nextElementSibling.querySelector('.prev-card-img');
        const nextCardBtn = carouselContainer.nextElementSibling.querySelector('.next-card-img');

        if (prevCardBtn) {
            prevCardBtn.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
                updateCardCarousel();
            });
        }

        if (nextCardBtn) {
            nextCardIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            updateCardCarousel();
            nextCardBtn.addEventListener('click', () => {
                currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
                updateCardCarousel();
            });
        }

        updateCardCarousel(); // Mostra a primeira imagem
    });
});
