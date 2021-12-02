import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import session from 'express-session';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import config from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard cat', //env
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
      store: new MongoStore({
        mongoUrl: config.mongoURI, //YOUR MONGODB URL
        ttl: 14 * 24 * 60 * 60,
        autoRemove: 'native',
      }),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
