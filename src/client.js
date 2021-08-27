const PostgresqlClient = require('knex/lib/dialects/postgres');
const ServerlessClient = require('serverless-postgres');

class ServerlessPostgresqlClient extends PostgresqlClient {
  constructor(config) {
    super(config);

    this.serverlessPostgres = config.serverlessPostgres;
  }

  get dialect() {
    return 'serverlessPostgres';
  }
  get driverName() {
    return 'serverlessPostgres';
  }

  acquireConnection() {
    return Promise.resolve(this.serverlessPostgres);
  }

  releaseConnection() {
    return this.serverlessPostgres.clean();
  }

  destroy() {
    return this.serverlessPostgres.end();
  }
}

module.exports = {
  default: ServerlessPostgresqlClient,
}
