# 🌱 Estufa - API de Catalogação de Plantas

Uma API RESTful simples e eficiente para catalogar e gerenciar plantas. Desenvolvida com foco em aprendizado de TypeScript, Express, POO, testes unitários e boas práticas de desenvolvimento.

## 📋 Sobre o Projeto

A **Estufa** é uma aplicação voltada para entusiastas de plantas que desejam manter um controle organizado da sua coleção. Com ela, é possível registrar informações detalhadas sobre cada planta, desde dados básicos até histórico de cuidados e tratamentos.

## 🌿 Funcionalidades

- **CRUD Completo**: Criar, ler, atualizar e deletar plantas
- **Catalogação Detalhada**: Informações completas sobre cada planta
- **Classificação Científica**: Nome científico e dados botânicos
- **Histórico de Cuidados**: Adubação, tratamentos e controle de pragas
- **Controle Temporal**: Datas de chegada, últimos cuidados e status

## 🖥️ Tecnologias Utilizadas

### Backend (Em Desenvolvimento)
- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset tipado do JavaScript
- **Express.js** - Framework web minimalista
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB

### Frontend (Em Desenvolvimento)
- **React** - Biblioteca para interfaces de usuário
- **Next.js** - Framework React para produção

### Ferramentas e Documentação
- **Swagger** - Documentação interativa da API
- **Jest** - Framework para testes unitários
- **ESLint** - Linter para qualidade de código

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- MongoDB (local ou MongoDB Atlas)

### Passos para Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/natbandeira/estufaPlantas.git
cd estufaPlantas
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Crie um arquivo .env na raiz do projeto
touch .env
```

```env
# Exemplo de configuração
DATABASE_URL=sua_string_de_conexao_aqui
```

4. **Execute o projeto:**
```bash
# Modo desenvolvimento
npm run dev

# Modo produção
npm start
```

## 📡 Endpoints da API

- `GET /estufa` - Lista todas as plantas
- `POST /planta` - Cria nova planta

### 📋 Próximas Features
- [ ] Sistema de autenticação
- [ ] Upload de imagens das plantas
- [ ] Lembretes de cuidados
- [ ] API terceira com mais infos de plantas

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Este é um projeto de estudos, então sugestões e melhorias são muito apreciadas.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Criado por

**Natália Bandeira**
- GitHub: [@natbandeira](https://github.com/natbandeira)
- LinkedIn: [Natália Bandeira](https://linkedin.com/in/nataliabandeira)

---

<!-- <div align="center">
  <sub>Feito com 💚 e muito ☕ por uma apaixonada por plantas e tecnologia!</sub>
</div> -->