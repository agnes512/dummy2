"use strict";
// Uncomment these imports to begin using these cool features!
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
// import {inject} from '@loopback/context';
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MainController = class MainController {
    constructor(orderRepository, userRepository, accRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.accRepository = accRepository;
    }
    async create(user) {
        const myUser = await this.userRepository.create({
            email: 'ujjt@28@mail.com',
            firstName: 'Ujjwal',
            lastName: 'Tiwari',
            contactNo: 133334566,
        });
        console.log(myUser);
        const acc = await this.orderRepository.create({ userId: myUser.id }); // the order instance must contain the foreign key
        console.log(acc);
        const result = await this.userRepository.find({
            where: { id: myUser.id },
            include: [{ relation: 'orders' }],
        });
        console.log(result);
        return result[0]; //Here i m not getting the included relation
    }
};
__decorate([
    rest_1.post('/users/abc', {
        responses: {
            '200': {
                description: 'Order model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.User) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.User, {
                    title: 'NewUser',
                    exclude: ['id'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "create", null);
MainController = __decorate([
    __param(0, repository_1.repository(repositories_1.OrderRepository)),
    __param(1, repository_1.repository(repositories_1.UserRepository)),
    __param(2, repository_1.repository(repositories_1.AccRepository)),
    __metadata("design:paramtypes", [repositories_1.OrderRepository,
        repositories_1.UserRepository,
        repositories_1.AccRepository])
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=main.controller.js.map