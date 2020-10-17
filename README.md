# Vanilla-NodeJS-CRUD-API

This is an API with CRUD functionality that manipulates a products resource.

## Endpoints

| Route               | HTTP VERB/Method | Functionality         |
| ------------------- | ---------------- | --------------------- |
| api/v1/products     | POST             | Create Product        |
| api/v1/products     | GET              | Retrieve ALL products |
| api/v1/products     | GET              | Retrive ONE product   |
| api/v1/products/:id | PUT              | Update Product        |
| api/v1/products/:id | DELETE           | Delete Product        |

## Project Setup

Clone repo:

```
  git clone https://github.com/nickmwangemi/Vanilla-NodeJS-CRUD-API.git
```

Change directory into the project repo:

```
  cd Vanilla-NodeJS-CRUD-API
```

Install dependencies and run server:

```
  npm install
  npm run dev
```

Local project server will run on [http://localhost:5000](http://localhost:5000) unless otherwise explicitly defined to a different value.
