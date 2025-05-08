# IncluMove

IncluMove é uma aplicação web inclusiva que promove o bem-estar físico, mental e social, oferecendo treinos adaptados para pessoas com diferentes níveis de mobilidade. O projeto foi desenvolvido como parte do Hackteen da Venturus e fundação Iochpe, com o objetivo de criar uma solução digital acessível e acolhedora.

## Funcionalidades

- **Cadastro e login**: Permite que os usuários criem contas e façam login para acessar suas informações personalizadas.
- **Treinos personalizados**: Geração de treinos adaptados com base no perfil do usuário.
- **Histórico de treinos**: Exibição do último treino realizado e gráficos com a distribuição dos treinos.
- **Recomendações de profissionais**: Sugestões de fisioterapeutas e personal trainers.
> Ainda não foi implementado, pretendemos fazer durante a mentoria
- **Acessibilidade**: Interface responsiva e inclusiva, projetada para atender diferentes necessidades.
> Seguimos a **WCAG 2.2** por exemplo, buscando um nível de pelo menos AA.\
  Também fizemos o site 100% responsivo e utilizável em mobile (métrica: Galaxy S20 Ultra)

## Tecnologias utilizadas

Todas as tecnologias e bibliotecas do curso do TIC em trilhas de react foram utilizadas no projeto, aqui estão incluidas apenas as que não estavam preentes no curso que utilizamos no projeto

### Frontend
- **React Bootstrap**: Utilizado para estilização e componentes prontos, acelerando o desenvolvimento.
- **Chart.js**: Para exibição de gráficos interativos, como o gráfico de distribuição de treinos.

### Estilização
- **Sass**: Escolhido para facilitar a manutenção e reutilização de estilos do bootstrap com variáveis e mixins.
- **Bootstrap**: Para garantir uma interface responsiva e consistente, simples de desenvolver.
## Como executar o projeto localmente

1. Clone o repositório:
    ```bash
    git clone <url-do-repositorio>
    cd IncluMove
2. Instale as dependências:
    ```bash
    npm install
3. Inicie o front-end:
    ```bash
    npm run dev
4. Inicie o servidor local (em outro terminal):
    ```bash
    npx json-server db.json
> tenha certeza de que o json-server esteja rodando na porta 3000, ou mude em src/services/api.js para a porta correta
5. Abrir o aplicativo em: [localhost](http://localhost:5173/)

### Estilização
- kebab-case para o nome de assets.
- snake_case para assets importados.
- camelCase para os scripts de js (ex.: contexts).
- PascalCase para componentes.

## Integrantes

- Henrique Professor
- Rodrigo Rio
- Samuel Augusto
