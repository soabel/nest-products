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
  await app.listen(3000);
}
bootstrap();



// example.ts
import { poolPromise } from './db';

const fetchData = async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('SELECT * FROM products');

    console.log(result.recordset);
  } catch (err) {
    console.error('Error executing query:', err);
  }
};

