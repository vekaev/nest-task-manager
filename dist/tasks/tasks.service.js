"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const task_repository_1 = require("./task.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(taskReprository) {
        this.taskReprository = taskReprository;
    }
    async getTasks(filterQuery) {
        return await this.taskReprository.getTasks(filterQuery);
    }
    async getOneTask(id) {
        const found = await this.taskReprository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`Can't find task with ${id} id`);
        }
        return found;
    }
    async updataTaskStatus(id, status) {
        const task = await this.getOneTask(id);
        task.status = status;
        await task.save();
        return task;
    }
    async createTask(createTaskDto) {
        return this.taskReprository.createTask(createTaskDto);
    }
    async deleteTask(id) {
        const result = await this.taskReprository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Can't find task with ${id} id`);
        }
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_repository_1.TaskReprository)),
    __metadata("design:paramtypes", [task_repository_1.TaskReprository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map