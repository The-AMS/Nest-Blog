import { DataSource } from "typeorm" 

export const PostgresProvider = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.DB_PASSWORD || '123456',
    database:    process.env.POSTGRES_DB,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,

})
