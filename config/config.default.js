/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554436141461_3574';

  // add your middleware config here
  config.middleware = [ 'errorHandler' ]

  exports.jwt = {
    enable: true,
    secret: "githinkcn"
  };

  config.security = {
    csrf: {
      enable: false,
    }
  }

  // 数据库信息配置
  exports.sequelize = {
    // 数据库类型
    dialect: "mysql",
    // host
    host: "localhost",
    // 端口号
    port: "3306",
    // 用户名
    username: "root",
    // 密码
    password: "xxx",
    // 数据库名
    database: "AEMM"
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
