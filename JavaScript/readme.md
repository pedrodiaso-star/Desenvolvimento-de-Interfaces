# Desenvolvimento de Interfaces

Este repositório reúne atividades práticas da disciplina **Desenvolvimento de Interfaces**, do curso de **Análise e Desenvolvimento de Sistemas (ADS) do CEUB**.

Os exercícios foram desenvolvidos para aplicar na prática os conceitos de estruturação de páginas, estilização, interação com o usuário e lógica de programação em JavaScript.

---

## Conteúdos estudados

- HTML5 e estrutura semântica
- CSS3 e estilização de interfaces
- JavaScript
- Variáveis e tipos de dados
- Operadores aritméticos, comparativos e lógicos
- Manipulação do DOM
- Eventos e formulários
- Funções
- Estruturas condicionais
- Validação de entradas
- Cálculos e exibição de resultados
- Boas práticas de acessibilidade

---

## Tecnologias utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — aparência e organização visual
- **JavaScript** — lógica e interatividade
- **Navegador web** — execução e testes
- **VS Code** — edição dos arquivos
- **Git e GitHub** — controle de versão e publicação

---

## Estrutura do repositório

```text
Desenvolvimento-de-Interfaces/
├── README.md
└── JavaScript/
    ├── Aula01-JavaScript/
    │   ├── Lab1/
    │   ├── Lab 2/
    │   ├── Lab3/
    │   └── Material_Estudante_JavaScript_Aula01_CEUB (1).md
    ├── aula02-javascript/
    │   ├── Lab 1/
    │   └── Lab 2/
    ├── aula03-javascript/
    │   └── Lab 1/
    └── readme.md
```

---

# Aula 01 — Introdução ao JavaScript

A primeira aula apresenta o funcionamento básico do JavaScript e sua integração com HTML e CSS.

## Conceitos abordados

- Função do HTML, CSS e JavaScript
- Declaração de variáveis com `const` e `let`
- Tipos de dados
- Operadores aritméticos
- Operadores de atribuição
- Operadores de comparação
- Operadores lógicos
- Conversão de valores com `Number()`
- Exibição de dados no console
- Captura de elementos HTML
- Eventos de clique
- Atualização da interface com `textContent` e `innerHTML`

## Laboratório 1 — Cadastro de usuário

Localização: `JavaScript/Aula01-JavaScript/Lab1`

Este laboratório utiliza variáveis para representar dados de um usuário.

### Dados utilizados

- Nome
- E-mail
- Idade
- Situação do usuário

### Arquivos

- `index.html` — estrutura da página
- `script.js` — declaração e exibição das variáveis no console

### Conceitos praticados

- `const` para valores que não serão alterados
- `let` para valores que podem ser modificados
- Diferentes tipos de dados
- Exibição de informações com `console.log()`

---

## Laboratório 2 — Calculadora de operações

Localização: `JavaScript/Aula01-Javascript/Lab 2`

Este projeto cria uma calculadora capaz de realizar quatro operações matemáticas.

### Funcionalidades

- Informar dois números
- Calcular a soma
- Calcular a subtração
- Calcular a multiplicação
- Calcular a divisão
- Impedir a divisão por zero
- Informar quando os campos estiverem vazios

### Arquivos

- `index.html` — campos, botão e área de resultado
- `style.css` — aparência da interface
- `script.js` — cálculos e manipulação dos elementos

### Operações realizadas

- Soma: `numero1 + numero2`
- Subtração: `numero1 - numero2`
- Multiplicação: `numero1 * numero2`
- Divisão: `numero1 / numero2`

### Exemplo de uso

Com os números `20` e `5`:

- Soma: `25`
- Subtração: `15`
- Multiplicação: `100`
- Divisão: `4`

---

## Laboratório 3 — Calculadora de média

Localização: `JavaScript/Aula01-Javascript/Lab3`

Neste laboratório, o usuário informa três números e o sistema calcula sua média aritmética.

### Funcionalidades

- Três campos numéricos
- Botão para realizar o cálculo
- Cálculo da média
- Exibição do resultado na página
- Validação de campos vazios

### Fórmula utilizada

```javascript
media = (nota1 + nota2 + nota3) / 3;
```

---

# Aula 02 — Entrada de dados e estruturas condicionais

A segunda aula apresenta validação de dados e uso de funções e estruturas condicionais.

## Conceitos abordados

- Entrada de dados com campos HTML
- Entrada de dados por meio de `prompt()`
- Conversão de texto em número
- Uso de funções
- Uso de `if`, `else if` e `else`
- Comparação de valores
- Validação de intervalos
- Organização e reutilização de código

---

## Laboratório 1 — Verificador de idade

Localização: `JavaScript/aula02-javascript/Lab 1`

Este laboratório verifica se a idade informada corresponde a uma pessoa maior ou menor de idade.

### Funcionalidades

- Verificação de campo vazio
- Validação de idade inteira
- Limite entre `0` e `120` anos
- Mensagem para idade inválida
- Resultado como maior ou menor de idade

### Lógica utilizada

```javascript
if (idade >= 18) {
  resultado.textContent = "Maior de idade.";
} else {
  resultado.textContent = "Menor de idade.";
}
```

---

## Laboratório 2 — Situação do estudante

Localização: `JavaScript/aula02-javascript/Lab 2`

A aplicação solicita o nome e três notas por meio de caixas de diálogo.

### Funcionalidades

- Solicitação do nome do estudante
- Solicitação de três notas
- Validação do nome
- Validação das notas entre `0` e `10`
- Cálculo da média aritmética
- Determinação da situação do estudante

### Situações possíveis

- Média maior ou igual a `7`: Aprovado
- Média maior ou igual a `5`: Recuperação
- Média menor que `5`: Reprovado

### Funções utilizadas

- `calcularMedia()` — calcula a média das notas
- `verificarSituacao()` — identifica a situação do estudante
- `notaValida()` — valida o intervalo das notas

---

# Aula 03 — Formulários e manipulação avançada do DOM

A terceira aula utiliza formulários para coletar, validar e apresentar dados.

## Conceitos abordados

- Manipulação de formulários
- Captura de eventos de envio
- Uso de `preventDefault()`
- Atribuição de classes CSS pelo JavaScript
- Validação de texto e números
- Uso de `focus()`
- Atualização dinâmica da interface
- Personalização de mensagens de resultado
- Aplicação de estilos conforme a situação

---

## Laboratório 1 — Calculadora de média estudantil

Localização: `JavaScript/aula03-javascript/Lab 1`

Este laboratório apresenta uma calculadora completa de média utilizando um formulário HTML.

### Funcionalidades

- Coleta do nome do estudante
- Coleta de três notas
- Validação do nome
- Validação de campos vazios
- Validação de notas entre `0` e `10`
- Cálculo da média
- Classificação da situação
- Exibição personalizada do resultado
- Botão para limpar o formulário
- Área de resultado com suporte a atualizações acessíveis

### Validações implementadas

- Nome não pode estar vazio
- Todas as notas devem ser preenchidas
- As notas devem ser números
- Os valores devem estar entre `0` e `10`

### Situações possíveis

| Média | Situação |
|---|---|
| Maior ou igual a 7 | Aprovado |
| Entre 5 e 6,9 | Recuperação |
| Menor que 5 | Reprovado |

### Arquivos

- `index.html` — formulário e estrutura da página
- `style.css` — estilos da interface e das situações
- `script.js` — cálculos, validações e manipulação do DOM

---

## Como executar os projetos

1. Abra o repositório em uma pasta local.
2. Navegue até o diretório da atividade desejada.
3. Abra o arquivo `index.html` no navegador.
4. Para os exercícios que usam JavaScript apenas no console, abra o DevTools com `F12`.
5. Selecione a aba **Console** para visualizar as mensagens.

Exemplo:

```text
JavaScript/aula02-javascript/Lab 1/index.html
```

---

## Organização dos arquivos

Cada laboratório geralmente contém os seguintes arquivos:

```text
Lab/
├── index.html
├── style.css
└── script.js
```

- `index.html`: estrutura da página
- `style.css`: aparência e posicionamento
- `script.js`: comportamento e lógica

---

## Boas práticas aplicadas

- Uso de nomes descritivos para variáveis e funções
- Uso de `const` por padrão
- Uso de `let` apenas quando necessário
- Separação entre HTML, CSS e JavaScript
- Validação das entradas antes dos cálculos
- Uso de funções para reutilizar a lógica
- Uso de classes CSS para representar estados
- Utilização de atributos de acessibilidade
- Prevenção do envio automático dos formulários
- Retorno de mensagens claras para o usuário

---

## Possíveis melhorias futuras

- Tornar todas as interfaces responsivas
- Adicionar temas claros e escuros
- Melhorar a apresentação visual
- Criar novas calculadoras
- Utilizar `localStorage` para salvar dados
- Criar validação diretamente nos formulários
- Adicionar animações e transições
- Transformar os projetos em uma única aplicação
- Publicar os projetos usando GitHub Pages
- Adicionar testes para cada cálculo e validação

---

## Autor

**Pedro Dias Oliveira**

Curso: **Análise e Desenvolvimento de Sistemas**

Instituição: **Centro Universitário de Brasília — CEUB**

---

## Disciplina

**Desenvolvimento de Interfaces**

Este repositório documenta a evolução dos estudos em HTML, CSS e JavaScript, incluindo a criação de interfaces simples, validação de formulários, manipulação do DOM e aplicação de estruturas condicionais.
