import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
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
    create(dto: CreateOrderDto): Promise<{
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
