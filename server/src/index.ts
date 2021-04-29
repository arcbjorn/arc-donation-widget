import Koa from 'koa';

import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import router from './router';
import { connect } from './database';

const app = new Koa();

// 'mongodb://widget:secret@mongodb:27017/widgetdb?authSource=admin'
const DB = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8081;

// Middleware
// app.use(cors());
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Koa server started at: http://localhost:${PORT}`);
});

connect(DB);
