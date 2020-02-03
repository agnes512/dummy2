import { Count, Filter, Where } from '@loopback/repository';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(user: Omit<User, 'id'>): Promise<User>;
    count(where?: Where<User>): Promise<Count>;
    find(filter?: Filter<User>): Promise<User[]>;
    updateAll(user: User, where?: Where<User>): Promise<Count>;
    findById(id: number, filter?: Filter<User>): Promise<User>;
    updateById(id: number, user: User): Promise<void>;
    replaceById(id: number, user: User): Promise<void>;
    deleteById(id: number): Promise<void>;
}
