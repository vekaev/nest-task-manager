"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = void 0;
exports.TypeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'кщще',
    database: 'taskmanager',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map