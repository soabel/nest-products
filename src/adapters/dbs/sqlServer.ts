// src/config/db.config.ts
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true', // Convertir 'true'/'false' a booleano
    trustServerCertificate: false, // Para producción, considera validar el certificado
  },
};
