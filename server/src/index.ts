import Koa from 'koa';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import router from './router';

const app = new Koa();

const PORT = process.env.PORT || 8081;

// Middleware
app.use(json());
app.use(logger());
app.use(bodyParser());
// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Koa server started at: http://localhost:${PORT}`);
});
