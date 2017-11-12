/* eslint-disable no-trailing-spaces */
'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510370519856_4806';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'yunfly_blog',
    host: 'rm-wz9gbqzgx98j60662o.mysql.rds.aliyuncs.com',
    port: '3306',
    username: 'root',
    password: 'Qq8809598',
  };

  return config;
};
