import { Order, User } from '../models';
import { OrderRepository } from '../repositories';
export declare class OrderUserController {
    orderRepository: OrderRepository;
    constructor(orderRepository: OrderRepository);
    getUser(id: typeof Order.prototype.orderid): Promise<User>;
}
