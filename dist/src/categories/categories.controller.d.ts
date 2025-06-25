import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
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
