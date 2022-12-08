import Router from 'koa-router';

const books = new Router();

books.get('/', (ctx, next) => {
  ctx.body = 'GET ' + ctx.request.path;
});

export default books;
