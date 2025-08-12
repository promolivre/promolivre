const produtosData = [
    // Exemplo para Celulares
    { nome: "Apple iPhone 15 Pro (256 GB)", id: "iphone-15-pro", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Samsung Galaxy S23 Ultra 5G Dual SIM 256 GB Preto", id: "samsung-s23-ultra", categoria: "celulares", subcategoria: "Samsung" },
    { nome: "Xiaomi Poco C75 256gb 8gb Ram Dual Sim Fone + Relogio Brinde", id: "xiaomi-poco-c75", categoria: "celulares", subcategoria: "Xiaomi" },
    { nome: "Apple iPhone 15 (128 GB) - Preto", id: "iphone-15", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Apple iPhone 16 (128 GB) - Preto", id: "iphone-16", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Apple iPhone 14 (128 GB) - Estelar", id: "iphone-14", categoria: "celulares", subcategoria: "Apple" },
    { nome: "Smartphone Samsung Galaxy A05s", id: "samsung-a05s", categoria: "celulares", subcategoria: "Samsung" },
    { nome: "Samsung Galaxy A25 5G Dual SIM 128Gb Azul Escuro", id: "samsung-a25", categoria: "celulares", subcategoria: "Samsung" },

    // Exemplo para Acessórios Veículos
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

    // Exemplo para Lar
    { nome: "Aspirador de Pó Turbo", id: "aspirador-po", categoria: "lar", subcategoria: "Eletrodomésticos" },
    // Adicione mais produtos de lar com suas subcategorias

    // Exemplo para Informática
    { nome: "Computador Completo Intel Core i7", id: "computador-i7", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo Fácil Office Intel Core I5", id: "computador-i5-office", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo 2Eletro Top Intel Core i5", id: "computador-i5-2eletro", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Computador Completo I5 3º G 8gb Hd Ssd", id: "computador-i5-3g", categoria: "informatica", subcategoria: "Computadores" },
    { nome: "Pc Gamer Completo 2eletro Go I7", id: "pc-gamer", categoria: "informatica", subcategoria: "Notebooks e PCs Gamer" },
    { nome: "Notebook Gamer Acer Nitro V15", id: "acer-nitro-v15", categoria: "informatica", subcategoria: "Notebooks e PCs Gamer" },
    { nome: "Notebook Acer Aspire 5 Intel Core I5", id: "acer-aspire-5", categoria: "informatica", subcategoria: "Notebooks" },
    { nome: "Monitor Gamer Aoc 21.5'' Full Hd Gaming 120hz", id: "monitor-aoc-21", categoria: "informatica", subcategoria: "Monitores" },
    { nome: "Monitor Gamer 27 27g4/p 180hz", id: "monitor-aoc-27", categoria: "informatica", subcategoria: "Monitores" },
    { nome: "Kit Monitor Led 17.1 Polegadas + Teclado E Mouse Sem Fio", id: "kit-monitor-teclado", categoria: "informatica", subcategoria: "Periféricos" },

    // Exemplo para Televisores
    { nome: "Smart TV 50” 4K", id: "smart-tv-50", categoria: "televisores", subcategoria: "Smart TVs" },
    // Adicione mais produtos de televisores com suas subcategorias
];

// ... (restante do seu script.js) ...

// **IMPORTANTE: Atualize esta parte no seu script.js**
const categoriasData = {
    celulares: {
        titulo: "Tecnologia > Celulares",
        // Subcategorias dinâmicas baseadas nos produtos disponíveis
        // Para "Pneus" e "Acessórios" você precisará ter produtos com essas subcategorias
        // Caso não tenha produtos específicos de "Pneus", podemos colocar "Manutenção" ou "Outros Acessórios"
        itens: ["Apple", "Samsung", "Motorola", "Xiaomi"] // Exemplo de subcategorias
    },
    "acessorios-Veiculos": {
        titulo: "Acessórios para Veículos",
        itens: ["Manutenção", "Eletrônicos", "Ferramentas", "Motos", "Som Automotivo", "Segurança"] // **Ajuste estas subcategorias para refletir seus produtos reais**
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

// Modifique a função mostrarCategoria para gerar links clicáveis para subcategorias
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
        dados.itens.forEach(subItem => {
            // Agora, cada item da subcategoria terá um onclick
            html += `<li><a href="#" onclick="filtrarPorSubcategoria('${categoriaId}', '${subItem}')">${subItem}</a></li>`;
        });
        html += "</ul>";
        subcategoriasDiv.innerHTML = html;
        subcategoriasDiv.style.display = "block";
    } else {
        subcategoriasDiv.style.display = "none";
    }

    // Por padrão, ao selecionar uma categoria principal, mostre todos os produtos dela
    filtrarPorSubcategoria(categoriaId, null); // Chama com subcategoria nula para mostrar todos
}

// **NOVA FUNÇÃO: Filtrar produtos por subcategoria**
function filtrarPorSubcategoria(categoriaId, subcategoriaNome) {
    const categoriaSection = document.getElementById(categoriaId);
    if (!categoriaSection) return;

    const cards = categoriaSection.querySelectorAll('.card');

    cards.forEach(card => {
        // Encontra o produto correspondente no produtosData
        const produtoId = card.id;
        const produto = produtosData.find(p => p.id === produtoId);

        if (produto) {
            // Verifica se o produto pertence à subcategoria selecionada
            // Se subcategoriaNome for null, mostra todos os produtos da categoria principal
            if (subcategoriaNome === null || produto.subcategoria === subcategoriaNome) {
                card.style.display = 'block'; // Mostra o card
            } else {
                card.style.display = 'none'; // Oculta o card
            }
        } else {
            // Se o card não estiver no produtosData, oculte-o por segurança ou trate o erro
            card.style.display = 'none';
            console.warn(`Produto com ID '${produtoId}' não encontrado no produtosData.`);
        }
    });

    // Rola para o início da seção da categoria após o filtro
    if (categoriaSection) {
        categoriaSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}


// ... (o restante do seu código, como a função buscarProduto, etc.) ...
