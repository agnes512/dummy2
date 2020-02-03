import { Entity } from '@loopback/repository';
export declare class Eat extends Entity {
    orderId: number;
    quantity: number;
    totalPrice: number;
    userId: number;
    constructor(data?: Partial<Eat>);
}
export interface OrderRelations {
}
export declare type OrderWithRelations = Eat & OrderRelations;
