# Integração React + Spring Boot

Projeto de integração entre uma API RESTful em Spring Boot e um front-end React, desenvolvido como atividade prática da disciplina de Desenvolvimento Web.

## Estrutura do projeto

```
react-spring/
├── back-end/   # API Spring Boot
└── front-end/  # Aplicação React
```

## Pré-requisitos

- Java 17 ou superior
- Maven
- Node.js e npm

## Como executar

### 1. Back-end (Spring Boot)

Abra um terminal dentro da pasta `back-end` e execute:

```bash
./mvnw spring-boot:run
```

A API ficará disponível em: `http://localhost:8080`

### 2. Front-end (React)

Em outro terminal, dentro da pasta `front-end`, execute:

```bash
npm install
npm start
```

A aplicação será aberta em: `http://localhost:3000`

> O React está configurado com proxy para `http://localhost:8080`, então o back-end deve estar rodando antes de usar o front-end.

## Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/address` | Lista todos os endereços |
| GET | `/address/{cep}` | Busca endereço pelo CEP |
| POST | `/address` | Cadastra novo endereço |
| DELETE | `/address/{cep}` | Remove endereço pelo CEP |
| PUT | `/address/{cep}` | Atualiza endereço pelo CEP |
| GET | `/address/cidade/{cidade}` | Lista endereços por cidade |
| GET | `/address/count` | Retorna total de endereços |
