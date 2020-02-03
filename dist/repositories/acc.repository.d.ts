import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { Acc, AccRelations, User } from '../models';
import { SqldbDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
export declare class AccRepository extends DefaultCrudRepository<Acc, typeof Acc.prototype.accId, AccRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly user: BelongsToAccessor<User, typeof Acc.prototype.accId>;
    constructor(dataSource: SqldbDataSource, userRepositoryGetter: Getter<UserRepository>);
}
