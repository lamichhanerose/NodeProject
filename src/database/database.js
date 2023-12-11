import knexJs from 'knex';
import knexConfig from './stubs/knexfile';

const knex = knexJs(knexConfig);

export default knex;
