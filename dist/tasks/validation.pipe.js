"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateTaskStatusPipe = void 0;
const task_model_1 = require("./task.model");
const common_1 = require("@nestjs/common");
class ValidateTaskStatusPipe {
    constructor() {
        this.allowedStatuses = [
            task_model_1.TaskStatus.OPEN,
            task_model_1.TaskStatus.IN_PROGRESS,
            task_model_1.TaskStatus.CLOSE
        ];
    }
    transform(value) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`${value} status is not valid`);
        }
        return value;
    }
    isStatusValid(value) {
        const idx = this.allowedStatuses.indexOf(value);
        return idx !== -1;
    }
}
exports.ValidateTaskStatusPipe = ValidateTaskStatusPipe;
//# sourceMappingURL=validation.pipe.js.map