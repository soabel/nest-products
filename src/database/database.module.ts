// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

import { ConnectionPool } from 'mssql';
import { dbConfig } from 'src/adapters/dbs/sqlServer';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const pool = new ConnectionPool(dbConfig);
        await pool.connect();
        console.log('Connected to Azure SQL Database');
        return pool;
      },
    },
    DatabaseService,
  ],
  exports: [DatabaseService],
})
export class DatabaseModule {}
