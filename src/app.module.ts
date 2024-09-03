import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { WinstonLoggerService } from './pino-logger.service';
//import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductsModule/* ,DatabaseModule */],
  controllers: [AppController],
  providers: [AppService,WinstonLoggerService],
})
export class AppModule {}
