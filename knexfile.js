'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/teaparty'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
