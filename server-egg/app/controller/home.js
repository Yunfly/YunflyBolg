'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, 秦飞云的个人网站正在搭建中...,day 2 :正在练习git flow 的开发流程^_^';
  }
}

module.exports = HomeController;
