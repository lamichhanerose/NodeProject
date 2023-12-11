import Knex from 'knex';
import { Model } from 'objection';
import dbConst from '../../database/constants';
import User from '../api/models/user.model'; 
import Role from '../api/models/role.model';


const knexInstance = Knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.NODE_ENV === 'test' ? process.env.TEST_DB_NAME : process.env.DB_NAME,
    port: process.env.DB_PORT,
    charset: 'utf8',
    timezone: 'UTC',
  },
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
    stub: './stubs/migration.stub',
  },
  seeds: {
    directory: './seeds',
    stub: './stubs/seed.stub',
  },
});


Model.knex(knexInstance);