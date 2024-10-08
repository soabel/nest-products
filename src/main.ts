import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonLoggerService } from './pino-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permitir cualquier origen
  });
  /* const pinoLogger = new PinoLoggerService().logger;
  app.use(pinoHttp({ logger: pinoLogger })); */

  // Configura el logger global de NestJS para usar PinoLoggerService
  app.useLogger(app.get(WinstonLoggerService));
  await app.listen(process.env.PORT||3000);
}
bootstrap();




