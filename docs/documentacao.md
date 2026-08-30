# 📄 Documentação do Portfólio Pessoal — 1ª Entrega

**Nome do Aluno:** Vitor Igor dos Santos  
**GU:** GU3080838  
**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Instituição:** IFSP — Câmpus Guarulhos  
**Disciplina:** Desenvolvimento Web / Prática de Projetos  

---

## 01. Definição do Projeto

* **Nome do Projeto:** Portfólio Pessoal — Vitor Igor dos Santos
* **Necessidade Atendida:** Como estudante do curso de Análise e Desenvolvimento de Sistemas no IFSP Guarulhos, criei este portfólio para ter um canal digital próprio onde posso me apresentar, divulgar minha formação acadêmica, listar as tecnologias que utilizo e disponibilizar meus contatos profissionais.
* **Objetivo Principal:** Desenvolver um portfólio pessoal em página única, moderno, responsivo e com suporte a dois idiomas (Português e Inglês), permitindo que recrutadores, professores e colegas de profissão conheçam meu perfil e entrem em contato comigo via WhatsApp ou GitHub.
* **Público-Alvo:** 
  * Recrutadores e profissionais de Recursos Humanos da área de Tecnologia.
  * Professores e comunidade acadêmica do IFSP Guarulhos.
  * Colegas desenvolvedores e pessoas interessadas em conhecer meu trabalho.
* **Proposta Visual:**
  * Estética em tema escuro com fundo preto escuro (`#090a0f`) e detalhes em azul neon (`#146CFF`), proporcionando um visual moderno.
  * Tipografia combinando as fontes **Poppins** (para títulos e leitura clara) e **Fira Code** (para detalhes técnicos no estilo código-fonte).
  * Animação de fundo em HTML5 Canvas (*Matrix Digital Rain*) com código binário caindo de forma suave.
* **Conteúdo Apresentado:**
  1. **Menu de Navegação:** Logotipo estilizado (`<Programador/>`), links de navegação rápida e seletor de idiomas (Português/Inglês).
  2. **Seção Inicial:** Apresentação inicial com meu nome, objetivo profissional como *Full Stack Developer*, foto de perfil e fundo animado em Canvas.
  3. **Seção Sobre Mim:** Resumo académico sobre minha formação no IFSP Guarulhos, áreas de interesse (HTML, CSS, JavaScript, Python e Inteligência Artificial) e grade com ícones das tecnologias.
  4. **Seção de Contatos:** Card centralizado com botões diretos para WhatsApp e GitHub com efeitos visuais interativos.
  5. **Rodapé:** Informações de direitos autorais e indicação das tecnologias utilizadas.
* **Principais Funcionalidades:**
  * Sistema de troca de idioma para alternância instantânea entre Português e Inglês.
  * Animação gráfica contínua em HTML5 Canvas no fundo da tela inicial.
  * Efeitos visuais ao passar o mouse sobre os botões de contato.
  * Layout totalmente responsivo adaptado para computadores, tablets e celulares.
* **Tecnologias Utilizadas:**
  * **HTML5:** Estrutura semântica das seções do site.
  * **CSS3 & Bootstrap 5:** Estilização, componentes visuais e responsividade.
  * **JavaScript:** Lógica da troca de idioma e animações em Canvas.
  * **Google Fonts:** Tipografias Poppins e Fira Code.
  * **Devicon & Bootstrap Icons:** Ícones das tecnologias e da interface.

---

## 02. Prompts Utilizados

Nesta seção, registrei a utilização da Inteligência Artificial durante o desenvolvimento do projeto, detalhando o objetivo, o prompt enviado, o resultado recebido, a análise de adequação e as adaptações realizadas:

### **Prompt 1: Estrutura semântica e layout inicial com Bootstrap 5**
* **Objetivo do prompt:** Gerar a estrutura inicial em HTML5 semântico com Bootstrap 5 em tema escuro para servir de base ao projeto.
* **Texto enviado à IA:**  
  > *"Crie uma estrutura básica de portfólio em HTML5 usando Bootstrap 5 em tema escuro. Preciso das seções de navegação, apresentação inicial, sobre mim com formação no IFSP Guarulhos, tecnologias e contatos."*
* **Resultado obtido:** A IA forneceu a estrutura HTML completa com a inclusão do Bootstrap 5 via CDN e a divisão das seções.
* **Análise crítica da resposta:** A estrutura HTML gerada foi muito satisfatória e atendeu perfeitamente à organização das seções solicitadas.
* **Decisão tomada por mim:** Mantive toda a estrutura semântica do HTML e criei o arquivo `styles.css` customizado para aplicar as cores em tom de preto profundo e azul neon que defini para o projeto.
* **Ajustes e novos prompts:** Adicionei regras de CSS customizadas para ajustar margens, sombras na foto de perfil e formatação dos botões.

---

### **Prompt 2: Lógica de alternância de idioma em JavaScript**
* **Objetivo do prompt:** Implementar um script em JavaScript puro para alternar o texto do portfólio entre Português e Inglês ao clicar no botão do menu.
* **Texto enviado à IA:**  
  > *"Escreva um script em JavaScript puro para fazer troca de idioma (Português e Inglês) em um site. Quero usar um dicionário de tradução e o atributo data-i18n nas tags HTML."*
* **Resultado obtido:** A IA gerou a função de atualização de idioma e a estrutura do objeto de traduções para manipular os elementos da página.
* **Análise crítica da resposta:** O código fornecido atendeu de forma precisa à lógica de troca de idioma sem recarregar a página.
* **Decisão tomada por mim:** Adicionei uma transição suave de opacidade no CSS e utilizei um pequeno tempo de espera no JavaScript para que a transição do texto ocorresse com um efeito visual fluido.
* **Ajustes e novos prompts:** Preenchi o objeto de traduções no meu código JavaScript com os textos em Português e Inglês de todas as seções do site.

---

### **Prompt 3: Animação em HTML5 Canvas (Chuva de Código Matrix)**
* **Objetivo do prompt:** Criar a animação de fundo em HTML5 Canvas com caracteres binários caindo no estilo Matrix.
* **Texto enviado à IA:**  
  > *"Como faço uma animação de chuva Matrix em HTML5 Canvas usando JavaScript? Quero que caiam números binários (0 e 1) em cor azul no fundo da tela."*
* **Resultado obtido:** A IA forneceu o código JavaScript responsável por desenhar e atualizar os caracteres na tela usando Canvas.
* **Análise crítica da resposta:** A animação gerada apresentou um excelente efeito visual e atendeu plenamente à ideia do projeto.
* **Decisão tomada por mim:** Ajustei a cor dos caracteres para o azul neon (`#146CFF`), defini a transparência do Canvas e configurei a sobreposição de camadas para garantir total legibilidade dos textos da página.
* **Ajustes e novos prompts:** Incluí um evento de escuta de redimensionamento na janela para manter a animação ajustada automaticamente a telas de diferentes resoluções.

---

### **Prompt 4: Efeitos visuais na seção de contatos**
* **Objetivo do prompt:** Adicionar efeitos visuais em JavaScript ao passar o ponteiro do mouse sobre os botões do WhatsApp e do GitHub.
* **Texto enviado à IA:**  
  > *"Me ajude a fazer um efeito em JS: quando passar o mouse no card do WhatsApp o fundo fica com Matrix verde, e no card do GitHub cai uma chuva de ícones do GitHub."*
* **Resultado obtido:** A IA disponibilizou as funções para os eventos de passagem de mouse alterando o fundo do Canvas e criando ícones dinâmicos.
* **Análise crítica da resposta:** As interações propostas funcionaram corretamente e adicionaram um toque dinâmico ao projeto.
* **Decisão tomada por mim:** Adicionei a limpeza de temporizadores e remoção dos elementos dinâmicos ao retirar o mouse para manter a animação fluida e leve.
* **Ajustes e novos prompts:** Ajustei a transparência e o tempo de exibição dos efeitos para garantir uma navegação agradável.

---

## 03. Histórias de Usuário

| ID | Tipo de Usuário | Ação / Funcionalidade (Quero...) | Benefício / Finalidade (Para...) |
| :--- | :--- | :--- | :--- |
| **US01** | Recrutador / RH | Visualizar a apresentação inicial e a biografia do aluno | Conhecer meu nome, minha formação no IFSP Guarulhos e minhas áreas de atuação. |
| **US02** | Recrutador Internacional | Alternar o idioma do site para Inglês clicando em um botão | Ler o portfólio e compreender minhas qualificações no idioma de sua preferência. |
| **US03** | Líder Técnico / Desenvolvedor | Consultar a lista de tecnologias com ícones na tela | Identificar rapidamente minhas competências em HTML, CSS, JavaScript e Python. |
| **US04** | Visitante / Contratante | Clicar nos botões do WhatsApp e do GitHub | Entrar em contato direto comigo ou visualizar meu perfil profissional no GitHub. |
| **US05** | Visitante da Área Tech | Visualizar as animações de fundo e os efeitos visuais nos botões | Experimentar uma navegação agradável e ver a aplicação prática de JavaScript e Canvas. |

---

## 04. Critérios de Aceitação

### **US01 — Apresentação e Biografia**
* **CA01.1:** O site deve exibir meu nome "Vitor" e meu objetivo "*Full Stack Developer*" bem visíveis na página inicial.
* **CA01.2:** A seção *Sobre mim* deve conter a informação da minha formação no curso de Análise e Desenvolvimento de Sistemas no IFSP Guarulhos.
* **CA01.3:** Minha foto de perfil deve carregar corretamente com o estilo visual definido.

### **US02 — Alternância de Idioma**
* **CA02.1:** O botão no menu superior deve indicar qual idioma será ativado ao ser clicado (exibe "EN" quando o site está em português).
* **CA02.2:** Ao clicar no botão, os textos traduzíveis do site devem alterar para o idioma selecionado sem recarregar a página.
* **CA02.3:** A alteração dos textos deve ocorrer acompanhada de uma transição suave de transparência.

### **US03 — Lista de Tecnologias**
* **CA03.1:** A seção de tecnologias deve exibir os ícones oficiais do HTML5, CSS3, JavaScript e Python.
* **CA03.2:** A grade de ícones deve se manter organizada em diferentes tamanhos de tela.

### **US04 — Links de Contato Direto**
* **CA04.1:** O botão do WhatsApp deve redirecionar para o link oficial `https://wa.me/5511946750795` abrindo em uma nova aba do navegador.
* **CA04.2:** O botão do GitHub deve redirecionar para o perfil público `https://github.com/VitorCreatorSWE` abrindo em uma nova aba do navegador.

### **US05 — Interatividade e Animações em Canvas**
* **CA05.1:** A animação Matrix azul deve ser exibida no fundo da apresentação inicial mantendo a fluidez do site.
* **CA05.2:** Ao passar o mouse sobre o card do WhatsApp, o fundo deve apresentar a animação Matrix na cor verde.
* **CA05.3:** Ao passar o mouse sobre o card do GitHub, ícones do GitHub devem cair pela tela.
* **CA05.4:** O layout completo deve se adaptar a telas de computadores, tablets e celulares.

---

## 05. Priorização de Requisitos (MoSCoW)

### **Must Have (Obrigatório — Indispensável para a entrega)**
* **Seção de Apresentação e Biografia (US01):** Requisito indispensável para apresentar minha identificação e formação no IFSP Guarulhos.
* **Exibição da Lista de Tecnologias (US03):** Requisito essencial para demonstrar as linguagens de programação dominadas.
* **Links de Contato Direto (US04):** Requisito fundamental para permitir que os visitantes entrem em contato via WhatsApp e GitHub.
* **Layout Responsivo:** Essencial para garantir a navegação adequada em qualquer dispositivo.

### **Should Have (Importante — Agrega alto valor)**
* **Sistema de troca de idioma (US02):** Funcionalidade importante que expande o alcance da apresentação para pessoas que preferem a leitura em inglês.
* **Menu de navegação fixa com rolagem suave:** Melhora a usabilidade permitindo navegar rapidamente entre as seções.

### **Could Have (Desejável — Diferencial visual)**
* **Animação Matrix em Canvas (US05):** Recurso visual adicionado para enriquecer a apresentação estética do site.
* **Efeitos ao passar o mouse nos botões de contato:** Interação gráfica adicional para tornar o uso da página mais dinâmico.

### **Won't Have Now (Não terá agora — Para entregas futuras)**
* **Seção de Galeria de Projetos:** Item mantido como pendente nesta entrega inicial para focar na entrega completa da estrutura base, estilo visual e animações de forma bem acabada.
* **Formulário de e-mail integrado:** Como o contato via WhatsApp e GitHub atende plenamente à necessidade de comunicação direta, a integração com servidor de e-mail ficou para uma versão futura.
* **Modo Claro:** Opção não implementada no momento para manter a identidade visual focada no tema escuro.

---

## 06. Descrição do MVP (Produto Mínimo Viável)

### **Definição do Produto Mínimo Viável (MVP)**
O Produto Mínimo Viável do meu portfólio consiste em uma aplicação web de página única funcional, responsiva e bilingue. Ele entrega exatamente o valor necessário para esta 1ª entrega: apresentar meu perfil como aluno do IFSP Guarulhos, mostrar minhas competências técnicas e permitir o contato direto.

### **Necessidades atendidas pelo produto inicial:**
* Apresentar minha identificação e trajetória acadêmica no IFSP Guarulhos.
* Mostrar as tecnologias que domino (HTML, CSS, JavaScript, Python).
* Oferecer canais de contato diretos e funcionais.

### **Seções presentes nesta versão inicial:**
1. **Menu de Navegação:** Logotipo estilizado e seletor de idioma.
2. **Seção Inicial:** Nome, objetivo profissional, foto e animação Matrix.
3. **Sobre Mim:** Biografia acadêmica e ícones das tecnologias.
4. **Contatos:** Cards interativos para WhatsApp e GitHub.
5. **Rodapé:** Informações de direitos autorais.

### **O que ficou para entregas futuras (Won't Have Now / Não terá agora):**
* Galeria de projetos com links de demonstração.
* Envio de mensagem por formulário de e-mail.
* Opção de troca para tema claro.

### **Condições para considerar a entrega concluída:**
* O site ser executado corretamente em navegadores modernos sem apresentar erros.
* A troca de idioma (Português e Inglês) funcionar de maneira fluida em todas as seções.
* Os links de contato abrirem corretamente as páginas do WhatsApp e GitHub.
* O layout adaptar-se a telas de celulares, tablets e computadores.

---

## 07. Backlog Acionável

Esta tabela descreve todos os 10 itens acionáveis planejados e desenvolvidos para a entrega completa do portfólio:

| ID | Item do Backlog | História Relacionada | Prioridade MoSCoW | Critérios de Aceitação | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BL01** | Criar a estrutura HTML da apresentação inicial com foto de perfil e texto | US01 | **Must Have** (Obrigatório) | CA01.1, CA01.3 | **Concluído** |
| **BL02** | Escrever o texto da seção Sobre Mim destacando o curso no IFSP Guarulhos | US01 | **Must Have** (Obrigatório) | CA01.2 | **Concluído** |
| **BL03** | Montar a grade visual da Stack Tecnológica com os ícones das linguagens | US03 | **Must Have** (Obrigatório) | CA03.1, CA03.2 | **Concluído** |
| **BL04** | Integrar o card de contato com o link direto para o WhatsApp | US04 | **Must Have** (Obrigatório) | CA04.1 | **Concluído** |
| **BL05** | Integrar o card de contato com o link direto para o perfil do GitHub | US04 | **Must Have** (Obrigatório) | CA04.2 | **Concluído** |
| **BL06** | Configurar o CSS e o Bootstrap 5 para garantir layout responsivo no celular | US01, US05 | **Must Have** (Obrigatório) | CA05.4 | **Concluído** |
| **BL07** | Programar o script de troca de idioma (Português/Inglês) em JavaScript | US02 | **Should Have** (Importante) | CA02.1, CA02.2, CA02.3 | **Concluído** |
| **BL08** | Desenvolver a animação em Canvas da chuva de código Matrix na seção inicial | US05 | **Could Have** (Desejável) | CA05.1 | **Concluído** |
| **BL09** | Implementar o efeito visual de Matrix verde ao passar o mouse no WhatsApp | US05 | **Could Have** (Desejável) | CA05.2 | **Concluído** |
| **BL10** | Implementar o efeito visual de chuva de ícones ao passar o mouse no GitHub | US05 | **Could Have** (Desejável) | CA05.3 | **Concluído** |
