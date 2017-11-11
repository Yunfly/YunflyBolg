'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, 秦飞云的个人网站正在搭建中...';
  }
}

module.exports = HomeController;
