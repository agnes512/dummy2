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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AccController = class AccController {
    constructor(accRepository) {
        this.accRepository = accRepository;
    }
    async create(acc) {
        return this.accRepository.create(acc);
    }
    async count(where) {
        return this.accRepository.count(where);
    }
    async find(filter) {
        return this.accRepository.find(filter);
    }
    async updateAll(acc, where) {
        return this.accRepository.updateAll(acc, where);
    }
    async findById(id, filter) {
        return this.accRepository.findById(id, filter);
    }
    async updateById(id, acc) {
        await this.accRepository.updateById(id, acc);
    }
    async replaceById(id, acc) {
        await this.accRepository.replaceById(id, acc);
    }
    async deleteById(id) {
        await this.accRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/accs', {
        responses: {
            '200': {
                description: 'Acc model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Acc) } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Acc, {
                    title: 'NewAcc',
                    exclude: ['accId'],
                }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "create", null);
__decorate([
    rest_1.get('/accs/count', {
        responses: {
            '200': {
                description: 'Acc model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Acc))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "count", null);
__decorate([
    rest_1.get('/accs', {
        responses: {
            '200': {
                description: 'Array of Acc model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Acc, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Acc))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "find", null);
__decorate([
    rest_1.patch('/accs', {
        responses: {
            '200': {
                description: 'Acc PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Acc, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Acc))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Acc, Object]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/accs/{id}', {
        responses: {
            '200': {
                description: 'Acc model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Acc, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Acc))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "findById", null);
__decorate([
    rest_1.patch('/accs/{id}', {
        responses: {
            '204': {
                description: 'Acc PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Acc, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Acc]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "updateById", null);
__decorate([
    rest_1.put('/accs/{id}', {
        responses: {
            '204': {
                description: 'Acc PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Acc]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/accs/{id}', {
        responses: {
            '204': {
                description: 'Acc DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AccController.prototype, "deleteById", null);
AccController = __decorate([
    __param(0, repository_1.repository(repositories_1.AccRepository)),
    __metadata("design:paramtypes", [repositories_1.AccRepository])
], AccController);
exports.AccController = AccController;
//# sourceMappingURL=acc.controller.js.map