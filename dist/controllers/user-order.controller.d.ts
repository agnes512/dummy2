import { Count, Filter, Where } from '@loopback/repository';
import { User, Order } from '../models';
import { UserRepository } from '../repositories';
export declare class UserOrderController {
    protected userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    find(id: number, filter?: Filter<Order>): Promise<Order[]>;
    create(id: typeof User.prototype.id, order: Omit<Order, 'orderId'>): Promise<Order>;
    patch(id: number, order: Partial<Order>, where?: Where<Order>): Promise<Count>;
    delete(id: number, where?: Where<Order>): Promise<Count>;
}
