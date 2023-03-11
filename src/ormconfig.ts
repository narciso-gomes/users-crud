import { DataSourceOptions } from "typeorm";

export const CONFIG: DataSourceOptions = {
    type: 'sqlite',
    database: '.db/sql',
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}']
}