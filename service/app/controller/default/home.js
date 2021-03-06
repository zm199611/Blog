'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
    this.ctx.body = '你好吴彦祖';
  }
  async getArticleList() {

    const sql = 'SELECT article.id as id ,' +
                'article.title as title ,' +
                'article.introduce as introduce ,' +
                "FROM_UNIXTIME(article.addTime,'%y-%m-%d %H:%i:%s') as addTime ," +
                'article.view_count as view_count ,' +
                'type.typeName as typeName ' +
                'FROM article LEFT JOIN type ON article.type_id = type.Id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
}

module.exports = HomeController;
