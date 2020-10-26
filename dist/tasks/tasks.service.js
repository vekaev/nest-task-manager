"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getFilteredTasks(filterQuery) {
        const { status, search } = filterQuery;
        let tasks = this.tasks;
        if (status) {
            tasks = tasks.filter(task => task.status === status);
        }
        if (search) {
            tasks = tasks.filter(task => task.title.includes(search) ||
                task.description.includes(search));
            console.log(search);
        }
        return tasks;
    }
    getOneTask(id) {
        const found = this.tasks.find(task => task.id === id);
        if (!found) {
            throw new common_1.NotFoundException(`Can't find task with ${id} id`);
        }
        return found;
    }
    updataTaskStatus(id, status) {
        const task = this.getOneTask(id);
        if (task) {
            task.status = status;
        }
        return task;
    }
    createNewTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = {
            id: uuid_1.v1(),
            title,
            description,
            status: task_model_1.TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTask(id) {
        const found = this.getOneTask(id);
        this.tasks = this.tasks.filter(task => task.id !== found.id);
    }
};
TasksService = __decorate([
    common_1.Injectable()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map