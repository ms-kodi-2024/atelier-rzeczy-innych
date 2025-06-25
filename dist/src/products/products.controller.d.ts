import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
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
