import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config()
const express = require('express')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('public'));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
