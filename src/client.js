const PostgresqlClient = require('knex/lib/dialects/postgres');
const ServerlessClient = require('serverless-postgres');

class ServerlessPostgresqlClient extends PostgresqlClient {
  constructor(config) {
    super(config);

    this.serverlessConfig = {
      ...config.connection,
      ...(config.serverlessPostgres ?  config.serverlessPostgres : {}),
    };
  }

  get dialect() {
    return 'serverlessPostgres';
  }

  get driverName() {
    return 'serverlessPostgres';
  }

  async acquireConnection() {
    this.client = new ServerlessClient(this.serverlessConfig);
    await this.client.connect();
    return this.client;
  }

  releaseConnection(connection) {
    return connection.clean();
  }

  destroy() {
    return this.client.end();
  }
}

module.exports = {
  default: ServerlessPostgresqlClient,
}
