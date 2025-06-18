# Projeto Mix Fibra: Site Institucional Responsivo

Bem-vindo ao projeto do site institucional da Mix Fibra! Este é um site moderno e responsivo, construído com **React** e estilizado com **Tailwind CSS**, focado em proporcionar a melhor experiência ao usuário em qualquer dispositivo.

---

## 💻 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **React:** Biblioteca JavaScript para construir interfaces de usuário interativas.
* **Vite:** Ferramenta de build de nova geração que oferece um ambiente de desenvolvimento front-end extremamente rápido.
* **Tailwind CSS:** Um framework CSS "utility-first" que permite construir designs personalizados diretamente no seu HTML, com foco em responsividade e agilidade.
* **JavaScript (ES6+):** Linguagem de programação principal do projeto.
* **HTML5:** Estrutura semântica do conteúdo.
* **CSS3:** Estilização personalizada, complementando o Tailwind CSS.

---

## ✨ Funcionalidades e Melhorias Destacadas

Este site inclui diversas seções informativas e interativas, com um forte foco em responsividade e experiência do usuário:

* **Navegação Responsiva (`Navbar`):**
    * Barra de navegação fixa no topo, com efeito de sombra ao rolar.
    * Menu desktop com links interativos e um botão de "Central do Assinante".
    * **Menu Hambúrguer Profissional:** Em dispositivos móveis, o menu se transforma em um elegante botão hambúrguer com animações suaves. Ao ser clicado, ele abre um menu de tela cheia que desabilita o scroll do corpo da página para uma experiência imersiva. O estilo das linhas do hambúrguer foi aprimorado com cantos arredondados e maior espessura para um visual mais robusto e moderno.
    * **Indicador de Seção Ativa:** Os links de navegação destacam a seção em que o usuário se encontra na página.

* **Seção Hero (`Hero`):**
    * Seção de destaque com um vídeo de fundo envolvente e um overlay sutil.
    * Layout adaptável que organiza texto e imagem de forma otimizada para telas grandes, com foco no texto principal em dispositivos móveis.
    * Tipografia responsiva que ajusta o tamanho do texto para melhor legibilidade.

* **Seção de Planos (`Plans`):**
    * Exibição dos planos de internet em um grid dinâmico que se adapta perfeitamente: 1 coluna em mobile, 2 em tablets pequenos, 3 em tablets maiores e 5 em desktops.
    * **Recomendador de Planos Integrado:** Uma nova funcionalidade interativa que permite ao usuário descrever seu uso da internet e receber uma recomendação de plano baseada em regras inteligentes. Ideal para guiar o usuário na escolha, sem a necessidade de contato inicial.
    * **Cards de Planos Flexíveis:** A descrição dos planos dentro de cada card agora se ajusta dinamicamente ao conteúdo, evitando cortes de texto e proporcionando uma visualização mais limpa em diferentes tamanhos de tela.

* **Seção "Por Que Nos Escolher" (`WhyChooseUs`):**
    * Apresentação dos diferenciais da Mix Fibra em cards responsivos que se organizam em grid (1 coluna em mobile, 3 em desktop).
    * **Melhorias Visuais:** Ícones agora possuem uma suave animação de flutuação (`float-subtle`) para adicionar um toque de dinamismo. Os cards têm um efeito de elevação mais pronunciado e uma sombra vibrante ao passar o mouse, aumentando a interatividade e o apelo visual.

* **Seção de Imagens (`ImageSection`):**
    * Galeria de imagens com layout de grid responsivo (1 coluna em mobile, 2 em desktop), onde algumas imagens podem se expandir para ocupar mais colunas em telas maiores para um design dinâmico.
    * Imagens fluidas que se ajustam automaticamente à largura disponível.

* **Seção de Vídeos (`VideoSection`):**
    * Exibição de vídeos incorporados do YouTube em um layout de grid responsivo.
    * **Embeds de Vídeo Perfeitos:** Utiliza a melhor prática para vídeos incorporados, garantindo que eles mantenham sua proporção de 16:9 e se ajustem perfeitamente ao espaço em qualquer dispositivo.

* **Outras Seções Importantes:**
    * **Depoimentos (`Testimonials`):** Apresenta depoimentos de clientes em um layout de grid responsivo, com textos que se adaptam e cards que mantêm a consistência visual.
    * **Sobre (`About`):** Detalha a empresa com texto responsivo, logomarca e uma lista de cidades atendidas em um formato de coluna dupla adaptável.
    * **Contato (`Contact`):** Oferece opções de contato (WhatsApp, Email) com botões responsivos que se empilham em mobile e se alinham em desktop.
    * **Suporte (`Support`):** Seção dedicada ao suporte, com um botão proeminente para contato via WhatsApp.
    * **FAQ (`Faq`):** Perguntas frequentes organizadas em um acordeão responsivo, com perguntas e respostas que se adaptam bem à largura da tela.
    * **Teste de Velocidade (`SpeedTest`):** Componente para integração de uma ferramenta de teste de velocidade (a ser implementada).
    * **Central do Assinante (`CentralAssinante`):** Componente para acesso à central do assinante.
    * **Rodapé (`Footer`):** Informações de contato, links úteis e direitos autorais, projetado para ser responsivo.
    * **Alternar Tema (`ThemeToggle`):** Funcionalidade para alternar entre temas claro/escuro (se implementado).

---

## 🚀 Como Iniciar o Projeto

Siga estas instruções para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada) e o [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) instalados.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [nome-da-pasta-do-seu-projeto]
    ```
    (Substitua `[URL_DO_SEU_REPOSITORIO]` e `[nome-da-pasta-do-seu-projeto]` pelos dados reais do seu projeto)

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev