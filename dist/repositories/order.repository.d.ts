import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Order, OrderRelations, User } from '../models';
import { SqldbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
export declare class OrderRepository extends DefaultCrudRepository<Order, typeof Order.prototype.orderId, OrderRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: BelongsToAccessor<User, typeof Order.prototype.orderId>;
    constructor(dataSource: SqldbDataSource, userRepositoryGetter: Getter<UserRepository>);
}
