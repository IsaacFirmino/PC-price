```markdown
# 🖥️ PCPrice | Monte o PC Ideal

O **PCPrice** é um protótipo funcional de um comparador inteligente de hardware e recomendador de computadores. Ele simula o monitoramento de preços de grandes lojas do mercado de tecnologia brasileiro (como Kabum, Pichau, Terabyte, Amazon, entre outras), ajudando o usuário a encontrar a melhor oferta com base no seu orçamento e objetivo de uso (Jogos, Trabalho ou Criação).

---

## 🚀 Demonstração

> 💡 **Nota do Protótipo:** Atualmente, os dados dos computadores e os preços exibidos são simulados estaticamente para fins de demonstração da interface e lógica de front-end. O sistema está preparado para receber uma API real de integração de marketplaces.

---

## ✨ Funcionalidades Principais

* **Filtro e Busca Inteligente:** Pesquisa em tempo real por componentes (RTX 4070, Ryzen 5, etc.) ou objetivos de uso. Filtros combinados por orçamento máximo e loja parceira.
* **Recomendador Personalizado:** Um assistente que sugere de forma automática a melhor máquina com base no orçamento disponível e perfil de uso selecionado pelo usuário.
* **Métricas de Desempenho:** Pontuação visual separada para três pilares essenciais: Jogos (*Gaming*), Produtividade (*Work*) e Design/Edição (*Creator*).
* **Comparador Multilojas:** Exibição do menor preço encontrado e links diretos mapeados para os motores de busca de cada loja parceira.
* **Alternador de Tema (Light/Dark Mode):** Suporte completo a temas claro e escuro, persistido localmente através de `localStorage` de acordo com a preferência do usuário.
* **Alertas de Preço fictício:** Formulário estruturado e validado para simular o cadastro e recebimento de notificações quando o hardware atingir o preço-alvo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web nativas e modernas, prezando por performance, semântica e sem dependências complexas (Vanilla JS):

* **HTML5:** Estruturação semântica de layouts e acessibilidade (`aria-labels`, `aria-live`, modais acessíveis).
* **CSS3 Avançado:** * Layouts robustos e responsivos com **CSS Grid** e **Flexbox**.
    * Arquitetura de estilização baseada em **CSS Variables** (Variáveis Globais) para suporte nativo ao *Dark Mode*.
    * Efeitos visuais e animações como o painel de preços dinâmico (*Ticker marquee animation*) e gradientes modernos baseados na nova especificação `color-mix()`.
* **JavaScript (ES6+):** Manipulação dinâmica do DOM, filtragem de dados estruturados em arrays de objetos, lógica de ordenação personalizada (melhor preço, maior desconto, maior pontuação) e controle de modais/toasts.
* **FontAwesome (v6.5.0):** Conjunto de ícones vetoriais para enriquecimento visual da interface.
* **Google Fonts:** Utilização das famílias de fontes *Barlow*, *Barlow Condensed* e *JetBrains Mono*.

---

## 📁 Estrutura do Projeto

```text
├── index.html       # Estrutura HTML e marcação semântica do painel
├── styles.css       # Estilização completa, variáveis de cor, responsividade e temas
└── app.js           # Lógica do front-end, simulação de dados, filtros e interações

```

---

## ⚙️ Como Executar o Projeto Localmente

Como este é um projeto construído puramente com tecnologia front-end nativa, você não precisa instalar nenhuma dependência ou gerenciador de pacotes (como Node.js/npm).

1. Faça o clone deste repositório ou baixe os arquivos:
```bash
git clone [https://github.com/SEU-USUARIO/PCPrice.git](https://github.com/SEU-USUARIO/PCPrice.git)

```


2. Navegue até a pasta do projeto:
```bash
cd PCPrice

```


3. Abra o arquivo `index.html` diretamente em seu navegador de preferência ou utilize uma extensão como a **Live Server** no VS Code para rodar um servidor local.

---

## 🔮 Próximos Passos (Roadmap de Evolução)

* [ ] Substituir o array estático de computadores por uma API real ou serviço de *Web Scraping* para capturar preços reais.
* [ ] Implementar o banco de dados e backend para persistir e processar os e-mails cadastrados na seção de Alertas de Preço.
* [ ] Adicionar gráficos comparativos de histórico de preços usando bibliotecas como Chart.js.

---

## 📝 Licença

Este projeto é livre para fins de estudo e portfólio. Sinta-se à vontade para clonar, modificar e utilizar o código.

```

---

### 💡 Dicas para o seu Repositório:
1. **Adicione um Print/GIF:** Na linha onde diz `## 🚀 Demonstração`, tire um print da tela do seu projeto rodando (ou grave um GIF rápido mexendo nele) e coloque o link da imagem ali. Isso aumenta drasticamente o engajamento do projeto.
2. **Suba no GitHub Pages:** Como esse projeto é puramente estático (`HTML/CSS/JS`), você pode ativar o **GitHub Pages** nas configurações do repositório para gerar um link online onde as pessoas possam testar seu projeto na hora. Se fizer isso, adicione o link gerado na descrição do repositório!

```
