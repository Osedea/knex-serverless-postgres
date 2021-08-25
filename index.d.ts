import type Knex from 'knex';

declare let knexServerlessPostgres: Knex.Client;

export default knexServerlessPostgres;
