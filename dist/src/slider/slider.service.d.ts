import { PrismaService } from 'src/shared/prisma.service';
export declare class SliderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        link: string;
        image: string;
    }[]>;
}
