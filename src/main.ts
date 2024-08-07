// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ProxyModule } from './proxy/proxy.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(ProxyModule);

  // 设置全局前缀
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // 配置 CORS 选项
  const corsOptions: CorsOptions = {
    origin: '*',
    // methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    // allowedHeaders: 'Content-Type, Accept, Authorization',
    methods: '*',
    allowedHeaders: '*',
    credentials: true,
  };

  // 应用 CORS 配置
  app.enableCors(corsOptions);

  await app.listen(3500, () => {
    console.log(`Application is running on: http://localhost:3500`);
  });
}
bootstrap();
