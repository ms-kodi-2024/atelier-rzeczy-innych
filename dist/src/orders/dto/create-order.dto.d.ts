declare class OrderItem {
    name: string;
    price: number;
    quantity: number;
    note?: string;
}
export declare class CreateOrderDto {
    name: string;
    email: string;
    phone: string;
    address: string;
    note?: string;
    items: OrderItem[];
}
export {};
