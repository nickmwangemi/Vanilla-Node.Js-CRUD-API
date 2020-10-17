# Vanilla-NodeJS-CRUD-API

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Endpoints](#endpoints)

## General info

This is an API with CRUD functionality that manipulates a products resource.

## Technologies

Project is created with:

- NodeJS (without any framework)

## Setup

To run this project locally:

```
$ git clone https://github.com/nickmwangemi/Vanilla-NodeJS-CRUD-API.git
$ cd Vanilla-NodeJS-CRUD-API
$ npm install
$ npm run dev
```

Local project server will run on [http://localhost:5000](http://localhost:5000) unless otherwise explicitly defined to a different value.

## Endpoints

| Route               | HTTP Verb/Method | Functionality         |
| ------------------- | ---------------- | --------------------- |
| api/v1/products     | POST             | Create Product        |
| api/v1/products     | GET              | Retrieve ALL products |
| api/v1/products     | GET              | Retrive ONE product   |
| api/v1/products/:id | PUT              | Update Product        |
| api/v1/products/:id | DELETE           | Delete Product        |

You can test the API endpoints using any API client such as Postman, Insomnia or the command line.
