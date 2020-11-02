"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = common_1.createParamDecorator((data, req) => {
    return req.user;
});
//# sourceMappingURL=get-user.decorator.js.map