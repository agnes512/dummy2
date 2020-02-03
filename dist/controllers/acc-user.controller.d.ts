import { Acc, User } from '../models';
import { AccRepository } from '../repositories';
export declare class AccUserController {
    accRepository: AccRepository;
    constructor(accRepository: AccRepository);
    getUser(id: typeof Acc.prototype.accId): Promise<User>;
}
