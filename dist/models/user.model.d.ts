import { Entity } from '@loopback/repository';
import { Order } from './order.model';
import { Acc } from './acc.model';
export declare class User extends Entity {
    id?: number;
    email: string;
    firstName: string;
    lastName: string;
    contactNo: number;
    orders: Order[];
    accs: Acc[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
