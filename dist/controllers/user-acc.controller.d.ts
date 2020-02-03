import { Count, Filter, Where } from '@loopback/repository';
import { User, Acc } from '../models';
import { UserRepository } from '../repositories';
export declare class UserAccController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: number, filter?: Filter<Acc>): Promise<Acc[]>;
    create(id: typeof User.prototype.id, acc: Omit<Acc, 'accId'>): Promise<Acc>;
    patch(id: number, acc: Partial<Acc>, where?: Where<Acc>): Promise<Count>;
    delete(id: number, where?: Where<Acc>): Promise<Count>;
}
