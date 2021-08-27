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

const knex = Knex({
  client: knexServerlesspostgres,
  connection: {
    host     : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
  },
  serverlessPostgres: {
    debug: true,
    delayMs: 3000,
  }
});

exports.run = function () {
  return knex('table_name').where('id', 1);
}
```

To force a serverless-postgres `clean()`, you can call `knex.client.release()`.

## Contributing

All contributions are welcome!

Please open an issue or pull request.


## Kudos

This is originally a fork of [knex-serverless-mysql] customized for the need of working with postgres.

Thanks a lot to [@MatissJanis](https://github.com/MatissJanis) for the great work.

[serverless-postgres]: github.com/MatteoGioioso/serverless-pg
[knex-serverless-mysql]: github.com/MatissJanis/knex-serverless-mysql
