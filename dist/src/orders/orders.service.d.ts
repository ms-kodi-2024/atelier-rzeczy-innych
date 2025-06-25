import { PrismaService } from 'src/shared/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        name: string;
        orderNumber: number;
        email: string;
        phone: string;
        address: string;
        note: string | null;
        createdAt: Date;
        items: import("@prisma/client/runtime/library").JsonValue;
    }[]>;
    create(data: any): Promise<{
        id: number;
        name: string;
        orderNumber: number;
        email: string;
        phone: string;
        address: string;
        note: string | null;
        createdAt: Date;
        items: import("@prisma/client/runtime/library").JsonValue;
    }>;
}
