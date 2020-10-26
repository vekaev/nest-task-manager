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
exports.TasksController = void 0;
const validation_pipe_1 = require("./validation.pipe");
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const dto_1 = require("./dto");
const task_model_1 = require("./task.model");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllTasks(filterQuery) {
        if (Object.keys(filterQuery).length) {
            return this.taskService.getFilteredTasks(filterQuery);
        }
        else {
            return this.taskService.getAllTasks();
        }
    }
    getOneTask(id) {
        return this.taskService.getOneTask(id);
    }
    createNewTask(createTaskDto) {
        return this.taskService.createNewTask(createTaskDto);
    }
    updateStatus(id, status) {
        return this.taskService.updataTaskStatus(id, status);
    }
    deleteTask(id) {
        return this.taskService.deleteTask(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetFilterTasks]),
    __metadata("design:returntype", Array)
], TasksController.prototype, "getAllTasks", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "getOneTask", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTaskDto]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "createNewTask", null);
__decorate([
    common_1.Patch(':id/status'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('status', validation_pipe_1.ValidateTaskStatusPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "updateStatus", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "deleteTask", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map