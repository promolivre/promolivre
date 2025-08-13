// Dados de produtos para a busca e filtragem por subcategoria
// *** CRUCIAL: COMPLETE ESTE ARRAY COM TODOS OS SEUS PRODUTOS E SUAS CATEGORIAS/SUBCATEGORIAS ***
const produtosData = [
    // Exemplo para Celulares - COMPLETE COM SEUS DADOS REAIS
    { nome: "Apple iPhone 15 Pro (256 GB)", id: "iphone-15-pro", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Samsung Galaxy S23 Ultra 5G Dual SIM 256 GB Preto", id: "samsung-s23-ultra", categoria: "celulares", subcategoria: "Samsung" },
    { nome: "Xiaomi Poco C75 256gb 8gb Ram Dual Sim Fone + Relogio Brinde", id: "xiaomi-poco-c75", categoria: "celulares", subcategoria: "Xiaomi" },
    { nome: "Apple iPhone 15 (128 GB) - Preto", id: "iphone-15", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Apple iPhone 16 (128 GB) - Preto", id: "iphone-16", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Apple iPhone 14 (128 GB) - Estelar", id: "iphone-14", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Smartphone Samsung Galaxy A05s", id: "samsung-a05s", categoria: "celulares", subcategoria: "Samsung" },
    { nome: "Samsung Galaxy A25 5G Dual SIM 128Gb Azul Escuro", id: "samsung-a25", categoria: "celulares", subcategoria: "Samsung" },

    // Exemplo para Acessórios Veículos - COMPLETE COM SEUS DADOS REAIS
    { nome: "Kit Camera De Re Automotiva Marca Rhead4.3 Inch Lcd Tela Retrovisor SPOWAY", id: "camera-de-re", categoria: "acessorios-Veiculos", subcategoria: "Eletrônicos" },
    { nome: "Shiny Revitalizador Pneu Pretinho Longa Duração - Vonixx Cor Vermelho", id: "revitalizador-pneu", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Massa De Polir Luxcar Tira Riscos Recupera Pintura Queimada", id: "massa-polir", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Caneta Retok Tira Riscos Automotivos Diversas Cores Luxcar Cor Preto", id: "caneta-retok-preto", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Caneta Retok Tira Riscos Automotivos Diversas Cores Luxcar Cor Prateado", id: "caneta-retok-prata", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Carregador de Bateria 12V Automotivo e Moto 300Ah", id: "carregador-automotivo", categoria: "acessorios-Veiculos", subcategoria: "Eletrônicos" },
    { nome: "Líquido refrigerante/anticongelante Paraflu 10-3004 ADITIVO", id: "aditivo-paraflu", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Caneta Tira Riscos Luxcar Para Carros Pneus Rodas Móveis Cor Vermelho", id: "caneta-retok-vermelho", categoria: "acessorios-Veiculos", subcategoria: "Manutenção" },
    { nome: "Jogo De Soquete Aço Crv 1/4 Catraca Chave Allen C/ Maleta", id: "jogo-soquete", categoria: "acessorios-Veiculos", subcategoria: "Ferramentas" },
    { nome: "Capa De Chuva Moto Pioneira Impermeável Pvc Motoqueiro Frio", id: "capa-chuva-moto", categoria: "acessorios-Veiculos", subcategoria: "Motos" },
    { nome: "Modulo Taramps Ts400x4 Amplificador 400w Digital", id: "modulo-taramps", categoria: "acessorios-Veiculos", subcategoria: "Som Automotivo" },
    { nome: "Trava Anti Furto Segurança Aço Volante Direção Pedal Veículo", id: "trava-volante", categoria: "acessorios-Veiculos", subcategoria: "Segurança" },

    // Exemplo para Lar - COMPLETE COM SEUS DADOS REAIS
    { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
     { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
    // Adicione mais produtos de lar com suas subcategorias e IDs

    // Exemplo para Informática - COMPLETE COM SEUS DADOS REAIS
    { nome: "Computador Completo Intel Core i7", id: "computador-i7", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo Fácil Office Intel Core I5", id: "computador-i5-office", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo 2Eletro Top Intel Core i5", id: "computador-i5-2eletro", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo I5 3º G 8gb Hd Ssd", id: "computador-i5-3g", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Pc Gamer Completo 2eletro Go I7", id: "pc-gamer", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Notebook Gamer Acer Nitro V15", id: "acer-nitro-v15", categoria: "informatica", subcategoria: "Notebooks e PCs Gamer" },
    { nome: "Notebook Acer Aspire 5 Intel Core I5", id: "acer-aspire-5", categoria: "informatica", subcategoria: "Notebooks" },
    { nome: "Monitor Gamer Aoc 21.5'' Full Hd Gaming 120hz", id: "monitor-aoc-21", categoria: "informatica", subcategoria: "Monitores" },
    { nome: "Monitor Gamer 27 27g4/p 180hz", id: "monitor-aoc-27", categoria: "informatica", subcategoria: "Monitores" },
    { nome: "Kit Monitor Led 17.1 Polegadas + Teclado E Mouse Sem Fio", id: "kit-monitor-teclado", categoria: "informatica", subcategoria: "Periféricos" },

    // Exemplo para Televisores - COMPLETE COM SEUS DADOS REAIS
    { nome: "Smart TV 50” 4K", id: "smart-tv-50", categoria: "televisores", subcategoria: "Smart TVs" },
    // Adicione mais produtos de televisores com suas subcategorias e IDs
];

// -------------------------------------------------------------------------
// FUNÇÕES DE BUSCA INTERNA
// -------------------------------------------------------------------------

function buscarProduto() {
    const termo = document.getElementById("campoPesquisa").value.toLowerCase();
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    if (termo.trim() === "") {
        resultadosDiv.style.display = "none";
        return;
    }

    // Filtra produtos pelo termo de busca em 'nome'
    const encontrados = produtosData.filter(p => p.nome.toLowerCase().includes(termo));

    if (encontrados.length === 0) {
        resultadosDiv.innerHTML = "<p class='no-results'>Nenhum produto encontrado.</p>";
    } else {
        encontrados.forEach(produto => {
            const item = document.createElement("div");
            item.classList.add("resultado-item");
            item.textContent = produto.nome;
            item.onclick = () => {
                const destino = document.getElementById(produto.id); // Busca o elemento pelo ID
                if (destino) {
                    resultadosDiv.style.display = "none";
                    // Garante que a categoria do produto esteja visível antes de rolar
                    const categoriaSec = destino.closest('.categoria-section');
                    if (categoriaSec && categoriaSec.style.display === 'none') {
                        mostrarCategoria(categoriaSec.id);
                    }
                    destino.scrollIntoView({ behavior: "smooth", block: "center" });
                    // Adiciona um destaque temporário ao card encontrado
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
    // Verifica se o clique não foi dentro da div de resultados ou do campo de pesquisa
    if (!resultadosDiv.contains(event.target) && !campoPesquisa.contains(event.target)) {
        resultadosDiv.style.display = "none";
    }
});

// -------------------------------------------------------------------------
// FUNÇÕES DE NAVEGAÇÃO E FILTRAGEM POR CATEGORIA/SUBCATEGORIA
// -------------------------------------------------------------------------

// Define as categorias principais e suas subcategorias para exibição no menu
const categoriasData = {
    celulares: {
        titulo: "Tecnologia > Celulares",
        itens: ["Apple", "Samsung", "Motorola", "Xiaomi"] // Ajuste conforme suas subcategorias reais
    },
    "acessorios-Veiculos": {
        titulo: "Acessórios para Veículos",
        // Ajuste estas subcategorias para refletir seus produtos reais e como os categorizou acima
        itens: ["Manutenção", "Eletrônicos", "Ferramentas", "Motos", "Som Automotivo", "Segurança"]
    },
    lar: {
        titulo: "Casa e Lar",
        itens: ["Eletrodomésticos", "Móveis", "Decoração", "Utensílios"]
    },
    informatica: {
        titulo: "Informática",
        itens: ["Computadores", "Notebooks", "Notebooks e PCs Gamer", "Periféricos", "Monitores", "Fontes"]
    },
    televisores: {
        titulo: "Televisores",
        itens: ["Smart TVs", "LED", "4K", "Suportes"]
    }
};

// Mostra a seção da categoria e suas subcategorias
function mostrarCategoria(categoriaId) {
    const secoes = document.querySelectorAll('.categoria-section');
    secoes.forEach(secao => secao.style.display = 'none'); // Oculta todas as seções de categoria

    const categoriaAtiva = document.getElementById(categoriaId);
    if (categoriaAtiva) {
        categoriaAtiva.style.display = 'block'; // Mostra a categoria selecionada
        categoriaAtiva.scrollIntoView({ behavior: "smooth", block: "start" }); // Rola até a categoria
    }

    const subcategoriasDiv = document.getElementById("subcategorias");
    const dados = categoriasData[categoriaId];

    if (dados) {
        let html = `<h3>${dados.titulo}</h3><ul>`;
        dados.itens.forEach(subItem => {
            // Cada item da subcategoria agora é um link clicável para filtrar
            html += `<li><a href="#" onclick="filtrarPorSubcategoria('${categoriaId}', '${subItem}')">${subItem}</a></li>`;
        });
        html += "</ul>";
        subcategoriasDiv.innerHTML = html;
        subcategoriasDiv.style.display = "block";
    } else {
        subcategoriasDiv.style.display = "none"; // Oculta se não houver subcategorias
    }

    // Por padrão, ao selecionar uma categoria principal, mostre todos os produtos dela
    filtrarPorSubcategoria(categoriaId, null); // Chama com subcategoria nula para mostrar todos
}

// Filtra produtos por subcategoria dentro da categoria ativa
function filtrarPorSubcategoria(categoriaId, subcategoriaNome) {
    const categoriaSection = document.getElementById(categoriaId);
    if (!categoriaSection) return;

    const cards = categoriaSection.querySelectorAll('.card');

    cards.forEach(card => {
        const produtoId = card.id;
        // Encontra o produto correspondente no array 'produtosData'
        const produto = produtosData.find(p => p.id === produtoId);

        if (produto) {
            // Verifica se o produto pertence à subcategoria selecionada (ou mostra todos se 'null')
            if (subcategoriaNome === null || produto.subcategoria === subcategoriaNome) {
                card.style.display = 'block'; // Mostra o card
            } else {
                card.style.display = 'none'; // Oculta o card
            }
        } else {
            // Oculta cards que não estão mapeados no produtosData para evitar problemas
            card.style.display = 'none';
            console.warn(`Produto com ID '${produtoId}' não encontrado ou não mapeado corretamente no produtosData.`);
        }
    });

    // Rola para o início da seção da categoria após o filtro
    if (categoriaSection) {
        categoriaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// -------------------------------------------------------------------------
// FUNÇÕES DO CARROSSEL DE DESTAQUE
// -------------------------------------------------------------------------

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let autoScrollInterval;
let currentIndex = 0; // Inicializa o índice do carrossel

function getVisibleCount() {
    if (window.innerWidth <= 768) return 1; // 1 item em mobile
    if (window.innerWidth <= 1024) return 2; // 2 itens em tablet
    return 3; // 3 itens em desktop
}

function updateCarousel(direction = 0) {
    const items = Array.from(track.children);
    const visibleCount = getVisibleCount();
    const totalItems = items.length;

    // Ajusta o índice baseado na direção
    if (direction === 1) { // Próximo
        if (currentIndex < totalItems - visibleCount) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o início
        }
    } else if (direction === -1) { // Anterior
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = Math.max(0, totalItems - visibleCount); // Vai para o último conjunto visível
        }
    }

    const itemWidth = items.length > 0 ? items[0].getBoundingClientRect().width : 0;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Reinicia o auto-scroll após interação manual
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
    updateCarousel(); // Atualiza a posição inicial
    resetAutoScroll(); // Inicia o auto-scroll
});
window.addEventListener('resize', () => {
    currentIndex = 0; // Reseta para o início ao redimensionar
    updateCarousel(); // Atualiza a posição com base no novo tamanho
    resetAutoScroll(); // Reinicia o auto-scroll no redimensionamento
});

// -------------------------------------------------------------------------
// FUNÇÕES DO MENU HAMBÚRGUER E CARROSSEL DE IMAGENS POR CARD
// -------------------------------------------------------------------------

// Função para mostrar/ocultar menu hamburguer (mobile)
function toggleMenu() {
    const menu = document.getElementById("menuCategorias");
    menu.classList.toggle("show");
}

// Executado quando o DOM estiver completamente carregado
window.addEventListener('DOMContentLoaded', () => {
    mostrarCategoria('celulares'); // Mostra a categoria "Celulares" por padrão ao carregar

    // Inicializa carrosséis de imagens dentro dos cards (se houver)
    document.querySelectorAll('.carousel-card-images').forEach(carouselContainer => {
        const images = carouselContainer.querySelectorAll('img');
        let currentImageIndex = 0;

        const updateCardCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('hidden', index !== currentImageIndex);
            });
        };

        // Certifique-se de que os botões existem antes de adicionar listeners
        // Navega para o elemento pai mais próximo com o carrossel de nav (para encontrar os botões)
        const carouselNav = carouselContainer.nextElementSibling;

        if (carouselNav) {
            const prevCardBtn = carouselNav.querySelector('.prev-card-img');
            const nextCardBtn = carouselNav.querySelector('.next-card-img');

            if (prevCardBtn) {
                prevCardBtn.addEventListener('click', () => {
                    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
                    updateCardCarousel();
                });
            }

            if (nextCardBtn) {
                nextCardBtn.addEventListener('click', () => {
                    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
                    updateCardCarousel();
                });
            }
        }
        
        updateCardCarousel(); // Mostra a primeira imagem ao carregar
    });
});

