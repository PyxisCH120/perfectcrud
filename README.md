#Tabela CRUD Suprema

https://crud-chico-59tqlbynk-pyxisch120s-projects.vercel.app

Descrição:
A Tabela CRUD Suprema é uma interface de programação de aplicações (API) desenvolvida para gerenciar uma tabela CRUD. Com esta API, os desenvolvedores podem realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma coleção de itens. Desenvolvida como parte do curso de Análise e Desenvolvimento de Sistemas, a CRUD Table API é construída utilizando o framework Next.js e integração com o Firebase para armazenamento de dados.

Esta documentação fornece informações detalhadas sobre os endpoints disponíveis, os parâmetros necessários para cada requisição, os códigos de resposta esperados e a estrutura dos dados esperados ou retornados. Além disso, inclui instruções sobre como configurar e executar o projeto em um ambiente de desenvolvimento local.Título do Vídeo: Como criar um CRUD com nextjs e Firebase

Canal: paulo felix

URL do Vídeo: https://youtube.com/playlist?list=PLIeTPQT6t1tnaviY16Wr_6C0rqteEkUQg&si=5Mzzd-hp8Y_lOFrQ# CRUD Table API

Este projeto é uma API para gerenciar uma tabela CRUD.

## Endpoints

### GET /items
Obtém todos os itens.

**Resposta:**
- 200 OK: Retorna uma lista de itens.

### POST /items
Adiciona um novo item.

**Corpo da Requisição:**
- `name` (string): Nome do item.
- `age` (number): Idade do item.
- `phone` (string): Número de telefone do item.
- `email` (string): E-mail do item.

**Resposta:**
- 201 Created: Retorna o item criado.

### DELETE /items/{id}
Exclui um item específico.

**Parâmetros de Rota:**
- `id` (string): ID do item a ser excluído.

**Resposta:**
- 204 No Content: Indica que o item foi excluído com sucesso.

## Estrutura do Modelo

```yaml
components:
  schemas:
    Item:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        age:
          type: integer
        phone:
          type: string
        email:
          type: string
      required:
        - name
        - age
        - phone
        - email
