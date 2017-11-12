'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const User = app.model.define('sys_user', {
    id: {
      type: STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    no: STRING,
    name: STRING,
    signature: STRING,
    idcard: STRING,
    state: STRING,
    headimg: STRING,
    birthday: DATE,
    password: STRING,
    ctrlinst: INTEGER,
    disabled: INTEGER,
    remark: STRING,
    transactionId: STRING,
    role: STRING,
    created_at: DATE,
    updated_at: DATE,
  }, { freezeTableName: true });

  return User;
};
