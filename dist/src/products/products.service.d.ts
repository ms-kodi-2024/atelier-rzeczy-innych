import { PrismaService } from 'src/shared/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        category: string;
        id: number;
        name: string;
        slug: string;
        price: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        description: string;
        quantity: number;
    }[]>;
    getBySlug(slug: string): Promise<{
        category: string;
        id: number;
        name: string;
        slug: string;
        price: number;
        images: import("@prisma/client/runtime/library").JsonValue;
        description: string;
        quantity: number;
    }>;
}
