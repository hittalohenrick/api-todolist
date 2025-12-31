# 📝 To-Do List API

### Sobre o Projeto
Esta é uma API RESTful leve e rápida para gerenciamento de tarefas, desenvolvida como parte do meu portfólio de Backend. O projeto implementa as quatro operações fundamentais do CRUD (Create, Read, Update, Delete) utilizando **Node.js** e **Express**.

Os dados são gerenciados em memória para fins de demonstração e simplicidade de execução.

### 🛠 Tecnologias
* **Runtime:** Node.js
* **Framework:** Express.js
* **Ferramentas:** Nodemon (Dev)

### 🚀 Como Rodar

1. **Clone o repositório:**
```bash
git clone https://github.com/hittalohenrick/api-todolist.git
cd api-todolist

```

2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor:**
```bash
# Modo de produção
npm start

# Modo de desenvolvimento
npm run dev

```


*O servidor rodará em `http://localhost:3000*`

---

### 📡 Documentação da API

Aqui estão os endpoints disponíveis para teste.

#### 1. Listar todas as tarefas (Use o Postaman ou curl)

Retorna o array completo de tarefas.

* **URL:** `/tasks`
* **Método:** `GET`
* **Resposta (200 OK):**
```json
[
  { "id": 1, "title": "Aprender Node.js" },
  { "id": 2, "title": "Fazer commit no GitHub" }
]

```



#### 2. Buscar tarefa por ID

Retorna uma única tarefa específica.

* **URL:** `/tasks/:id`
* **Método:** `GET`
* **Exemplo:** `/tasks/1`

#### 3. Criar nova tarefa

Adiciona um novo item à lista.

* **URL:** `/tasks`
* **Método:** `POST`
* **Corpo da Requisição (JSON):**
```json
{
  "title": "Nova tarefa importante"
}

```


* **Resposta (201 Created):** Retorna a tarefa criada com o ID gerado.

#### 4. Atualizar tarefa

Edita o título de uma tarefa existente.

* **URL:** `/tasks/:id`
* **Método:** `PUT`
* **Corpo da Requisição (JSON):**
```json
{
  "title": "Título atualizado"
}

```



#### 5. Deletar tarefa

Remove uma tarefa da lista.

* **URL:** `/tasks/:id`
* **Método:** `DELETE`
* **Resposta (204 No Content):** Sem corpo de resposta.