'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async users() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.list(ctx.query);
  }

  async user() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.find(ctx.params.id);
  }

  async create() {
    const { ctx } = this;
    const created = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }

  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { body } = ctx.request;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }

  async del() {
    const { ctx } = this;
    const { id } = ctx.params;
    await ctx.service.user.del(id);
    ctx.status = 200;
  }
}

module.exports = UserController;
