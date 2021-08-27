# knex-serverless-postgres

[![npm](https://img.shields.io/npm/v/knex-serverless-postgres.svg)](https://www.npmjs.com/package/knex-serverless-postgres)
[![npm](https://img.shields.io/npm/l/knex-serverless-postgres.svg)](https://www.npmjs.com/package/knex-serverless-postgres)

Minimalistic knex.js dialect for [serverless-postgres].

## Motivation

[serverless-postgres] persists database connections across multiple AWS Lambda function execution contexts. This reduces the load on the database. However, this client is not natively supported by Knex. This library solves the problem.

## Getting Started

### Installation

```
yarn add knex-serverless-postgres serverless-postgres

# or

npm install knex-serverless-postgres serverless-postgres
```

### Simple Example

```js
const Knex = require('knex');
const knexServerlesspostgres = require('knex-serverless-postgres');

const serverlessPostgres = require('serverless-postgres')({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  debug: true,
  delayMs: 3000
});

const knex = Knex({
  client: knexServerlesspostgres,
  serverlessPostgres,
});

exports.run = function () {
  return knex('table_name').where('id', 1);
}
```

## Contributing

All contributions are welcome!

Please open an issue or pull request.


## Kudos

This is originally a fork of [knex-serverless-mysql] customized for the need of working with postgres.

Thanks a lot to [@MatissJanis](https://github.com/MatissJanis) for the great work.

[serverless-postgres]: github.com/MatteoGioioso/serverless-pg
[knex-serverless-mysql]: github.com/MatissJanis/knex-serverless-mysql
