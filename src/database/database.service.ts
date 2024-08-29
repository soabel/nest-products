// src/database/database.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ConnectionPool } from 'mssql';

@Injectable()
export class DatabaseService {
  constructor(
    @Inject('DATABASE_CONNECTION') private readonly pool: ConnectionPool,
  ) {}

  async query(query: string) {
    try {
      const result = await this.pool.request().query(query);
      return result.recordset;
    } catch (err) {
      console.error('Error executing query:', err);
      throw err;
    }
  }
}
