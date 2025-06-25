import { PrismaService } from 'src/shared/prisma.service';
export declare class CategoriesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        slug: string;
        description: string;
        title: string;
        image: string;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: number;
        slug: string;
        description: string;
        title: string;
        image: string;
    }>;
}
