import { Entity } from '@loopback/repository';
export declare class Order extends Entity {
    orderId?: number;
    quantity: number;
    totalPrice: number;
    userId: number;
    constructor(data?: Partial<Order>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Order & OrderRelations;
