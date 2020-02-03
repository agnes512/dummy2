import { User } from '../models';
import { OrderRepository, UserRepository, AccRepository } from '../repositories';
export declare class MainController {
    orderRepository: OrderRepository;
    userRepository: UserRepository;
    accRepository: AccRepository;
    constructor(orderRepository: OrderRepository, userRepository: UserRepository, accRepository: AccRepository);
    create(user: Omit<User, 'id'>): Promise<User>;
}
