<p align="center">
  <img alt="Rocketseat Education" src="https://avatars.githubusercontent.com/u/69590972?s=200&v=4" width="100px" />
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Rocketseat&message=Education&color=8257e5&labelColor=202024" alt="Rocketseat Project" />
  <a href="LICENSE"><img  src="https://img.shields.io/static/v1?label=License&message=MIT&color=8257e5&labelColor=202024" alt="License"></a>
</p>

<h1 align="center">🔥 Ignite Quiz</h1>

## 💻 Projeto

Aplicativo desenvolvido durante a trilha de React Native da Rocketseat, com o objetivo de criar uma experiência interativa de quiz, utilizando recursos avançados de animação, gestos e feedback visual. O projeto explora integração com SVGs, animações em thread nativa, manipulação de áudio e respostas táteis.

## 📸 **Pré-visualização do App**

## 📸 **Pré-visualização do App**

A seguir, você confere algumas animações e microinterações implementadas no app. Elas foram projetadas para proporcionar uma experiência mais fluida, intuitiva e envolvente ao usuário.

---

### 🎯 **Animações em filtros e listagens**

- **À esquerda:** os filtros contam com feedback visual ao toque e exibem as opções de forma animada e sequencial.
- **À direita:** ao arrastar um item da lista, ele pode ser removido com uma animação suave, e os demais elementos se reposicionam com um efeito de mola que reforça a ação do usuário.

<p align="center">
  <img src="./assets/1-filtro_e_lista.gif" alt="Demonstração de filtro e listagem principal" width="45%"/>
  <img src="./assets/2-excluir_reposicionar.gif" alt="Demonstração de exclusão e reposicionamento na listagem" width="45%"/>
</p>

---

### 🧠 **Animações nas perguntas e alternativas**

- **À esquerda:** ao acessar uma nova pergunta, ela aparece com um efeito de rotação estilo “flip card”.
- **À direita:** a seleção de alternativas conta com feedback visual personalizado, e a barra de progresso se anima conforme o avanço no quiz.

<p align="center">
  <img src="./assets/3-entrando_selecionando.gif" alt="Demonstração de interação com alternativas e barra de progresso" width="45%"/>
  <img src="./assets/3.1-selecionando-barra-de-progresso.gif" alt="Demonstração de progresso e seleção de alternativas" width="45%"/>
</p>

---

### ✅ **Feedbacks visuais, sonoros e táteis**

- **À esquerda:** ao acertar uma pergunta, o fundo é preenchido em verde e um som de estrela é reproduzido.
- **À direita:** ao errar, o fundo fica vermelho, o som de trombeta é executado e o dispositivo vibra.

<p align="center">
  <img src="./assets/4-acerto.gif" alt="Feedback ao acertar a pergunta" width="45%"/>
  <img src="./assets/5-erro.gif" alt="Feedback ao errar a pergunta" width="45%"/>
</p>

---

### ⏭️ **Ações adicionais no quiz**

- **À esquerda:** o usuário pode “pular” a pergunta arrastando lateralmente, com uma microanimação reforçando a ação.
- **À direita:** ao finalizar o quiz, uma animação de troféu com efeito de mola e estrelas piscando celebra a conclusão da jornada.

<p align="center">
  <img src="./assets/6-pular.gif" alt="Ação de pular a pergunta" width="45%"/>
  <img src="./assets/7-trofeu.gif" alt="Tela final com troféu animado" width="45%"/>
</p>

## 🚀 Tecnologias e Bibliotecas Utilizadas

### ✨ Animações e Interações

* [**react-native-reanimated**](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

  * Animações com melhor performance na thread nativa.
  * Comando: `npx expo install react-native-reanimated`
  * Configurado em [`babel.config.js`](./babel.config.js)
  * 📅 Instalado em: 18/06/2025

* [**react-native-gesture-handler**](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)

  * Suporte a gestos e interações do usuário.
  * Comando: `npx expo install react-native-gesture-handler`
  * 📅 Instalado em: 23/06/2025

* [**expo-haptics**](https://www.npmjs.com/package/expo-haptics)

  * Feedback tátil (vibração) para interações mais imersivas.
  * Comando: `npx expo install expo-haptics`
  * 📅 Instalado em: 26/06/2025

### 🎨 Gráficos e Visuais

* [**expo-skia**](https://docs.expo.dev/versions/latest/sdk/skia/)

  * Renderização de gráficos e visuais dinâmicos.
  * Comando: `npx expo install @shopify/react-native-skia`
  * 📅 Instalado em: 24/06/2025

* [**react-native-svg**](https://docs.expo.dev/versions/latest/sdk/svg/)

  * Manipulação e exibição de imagens SVG como componentes.
  * Comando: `npx expo install react-native-svg`
  * 📅 Instalado em: 25/06/2025

* [**react-native-svg-transformer**](https://github.com/kristerkari/react-native-svg-transformer)

  * Permite importar SVGs diretamente como componentes React.
  * Comando: `npm install --save-dev react-native-svg-transformer`
  * Configurado em [`metro.config.js`](./metro.config.js)
  * 📅 Instalado em: 25/06/2025

### 🔊 Mídia

* [**expo-av**](https://docs.expo.dev/versions/latest/sdk/av/)

  * Suporte a reprodução de áudio.
  * Comando: `npx expo install expo-av`
  * 📅 Instalado em: 26/06/2025

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💜 por Cesar + Rocketseat
</p>