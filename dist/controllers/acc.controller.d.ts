import { Count, Filter, Where } from '@loopback/repository';
import { Acc } from '../models';
import { AccRepository } from '../repositories';
export declare class AccController {
    accRepository: AccRepository;
    constructor(accRepository: AccRepository);
    create(acc: Omit<Acc, 'accId'>): Promise<Acc>;
    count(where?: Where<Acc>): Promise<Count>;
    find(filter?: Filter<Acc>): Promise<Acc[]>;
    updateAll(acc: Acc, where?: Where<Acc>): Promise<Count>;
    findById(id: number, filter?: Filter<Acc>): Promise<Acc>;
    updateById(id: number, acc: Acc): Promise<void>;
    replaceById(id: number, acc: Acc): Promise<void>;
    deleteById(id: number): Promise<void>;
}
