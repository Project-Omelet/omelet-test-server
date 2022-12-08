import Koa from 'koa';
import api from './api';

const app = new Koa();

// Code에 기록한 순서대로 middleware 동작
// app.use(async (ctx: Context, next) => {
//   console.log('Hello?');
//   const started = new Date();
//   await next();
//   console.log(`${new Date().getTime() - started.getTime()}ms`);
// });

// app.use((ctx: Context, next) => {
//   console.log('Omelet');
//   next();
// });

// app.use((ctx: Context) => {
//   ctx.body = 'Hello Koa';
// });

api.get('/', (ctx, next) => {
  ctx.body = 'Home';
});

api.get('/about', (ctx, next) => {
  ctx.body = 'About';
});

api.get('/about/:name', (ctx, next) => {
  const { name } = ctx.params;
  ctx.body = `${name}'s information`;
});
api.get('/post', (ctx, next) => {
  const { id } = ctx.request.query;
  if (id) {
    ctx.body = `Post #${id}`;
  } else {
    ctx.body = 'Not exists post ID';
  }
});

// api.use('/api', api.routes());
app.use(api.routes()).use(api.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
