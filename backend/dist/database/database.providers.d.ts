import { Connection } from 'typeorm';
export declare const databaseProviders: {
    provide: string;
    inject: any[];
    useFactory: () => Promise<Connection>;
}[];
