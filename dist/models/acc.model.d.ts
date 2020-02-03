import { Entity } from '@loopback/repository';
export declare class Acc extends Entity {
    accId?: number;
    name?: string;
    userId: number;
    constructor(data?: Partial<Acc>);
}
export interface AccRelations {
}
export declare type AccWithRelations = Acc & AccRelations;
