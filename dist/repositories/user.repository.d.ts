import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { User, UserRelations, Order, Acc } from '../models';
import { SqldbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { OrderRepository } from './order.repository';
import { AccRepository } from './acc.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected orderRepositoryGetter: Getter<OrderRepository>;
    protected accRepositoryGetter: Getter<AccRepository>;
    readonly orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;
    readonly accs: HasManyRepositoryFactory<Acc, typeof User.prototype.id>;
    constructor(dataSource: SqldbDataSource, orderRepositoryGetter: Getter<OrderRepository>, accRepositoryGetter: Getter<AccRepository>);
}
