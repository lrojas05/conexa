<p align="center">
  <a href="https://conexa.ai/" target="blank"><img src="./imagen/Banner_Notion.png" width="200" alt="Conexa Logo" /></a>
</p>

[circleci-url]: https://conexatech.notion.site/Backend-NodeJS-Ssr-Test-d3fa3d4c614249b2afeac5d8cf98784f

## Description

[Backend NodeJS Ssr. Test](https://conexatech.notion.site/Backend-NodeJS-Ssr-Test-d3fa3d4c614249b2afeac5d8cf98784f) 

## Requirements
[NodeJS v18.x](https://nodejs.org/es)


## Project configuration
```bash
git clone https://github.com/lrojas05/conexa
cd ./conexa
```
## Installation

```bash
$ npm install
```
## File .env
Used .env.example and defines all environment variables

## URL 
```bash
HOST : PORT /api
```

## Endpoint
```bash
- GET /api (swagger)
- POST /register
- POST /login
- GET  /films
- GET  header(rol = user) /films/id
- POST header(rol = admin) /films/
- POST header(rol = admin) /films/id
- DELETE header(rol = admin) /films/id
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Additional
 ###### [URL de DEPLOY SERVER]( https://conexa-test-lrojas05.vercel.app/api)




