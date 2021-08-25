import PostgresqlClient from 'knex/lib/dialects/postgres';

export default class ServerlessPostgresqlClient extends PostgresqlClient {
  constructor(config) {
    super(config);

    this.postgres = new ServerlessClient({
      ...config.connection,
      ...config.extra.serverlessPostgres,
    });
  }

  get dialect() {
    return 'serverlessPostgres';
  }
  get driverName() {
    return 'serverlessPostgres';
  }

  acquireConnection() {
    return Promise.resolve(this.postgres);
  }

  releaseConnection() {
    return this.postgres.clean();
  }

  destroy() {
    return this.postgres.end();
  }
}
