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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let Order = class Order extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
        mysql: {
            columnName: 'orderid',
            dataType: 'integer',
            dataLength: null,
            dataPrecision: null,
            dataScale: 0,
            nullable: 'NO',
        },
    }),
    __metadata("design:type", Number)
], Order.prototype, "orderId", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    repository_1.belongsTo(() => user_model_1.User),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
Order = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Order);
exports.Order = Order;
//# sourceMappingURL=order.model.js.map