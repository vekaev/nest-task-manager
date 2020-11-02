"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskReprository = void 0;
const taskStatus_enum_1 = require("./taskStatus.enum");
const task_entity_1 = require("./task.entity");
const typeorm_1 = require("typeorm");
let TaskReprository = class TaskReprository extends typeorm_1.Repository {
    async getTasks(filterQuery, user) {
        const { status, search } = filterQuery;
        const query = this.createQueryBuilder('task');
        query.where('task.userId = :userId', { userId: user.id });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(task.title LIKE :search OR task.description LIKE :search)', { search: `%${search}%` });
        }
        const tasks = await query.getMany();
        return tasks;
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = new task_entity_1.Task();
        task.title = title;
        task.description = description;
        task.status = taskStatus_enum_1.TaskStatus.OPEN;
        task.user = user;
        await task.save();
        return task;
    }
};
TaskReprository = __decorate([
    typeorm_1.EntityRepository(task_entity_1.Task)
], TaskReprository);
exports.TaskReprository = TaskReprository;
//# sourceMappingURL=task.repository.js.map