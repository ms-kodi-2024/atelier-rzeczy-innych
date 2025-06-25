"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.slider.deleteMany();
    await prisma.category.createMany({
        data: [
            {
                id: 1,
                slug: 'kartki-w-kopercie',
                title: 'kartki w kopercie',
                description: 'Niewielka kartka, wielkie uczucia.',
                image: '/images/categories/category-card-envelope.png',
            },
            {
                id: 2,
                slug: 'kartki-w-pudelku',
                title: 'kartki w pudełku',
                description: 'Wiele serdeczności w wyjątkowej oprawie.',
                image: '/images/categories/category-card-box.png',
            },
            {
                id: 3,
                slug: 'boxy-i-pudelka',
                title: 'boxy i pudełka',
                description: 'Moc życzeń w niebanalnej formie.',
                image: '/images/categories/category-box.png',
            },
        ],
    });
    await prisma.slider.createMany({
        data: [
            {
                id: 1,
                image: '/images/slides/slide-1.png',
                link: '/produkty',
            },
            {
                id: 2,
                image: '/images/slides/slide-2.png',
                link: '/produkty',
            },
            {
                id: 3,
                image: '/images/slides/slide-3.png',
                link: '/produkty',
            },
        ],
    });
    await prisma.product.createMany({
        data: [
            {
                name: 'Kartka Pop-up',
                slug: 'kartka-pop-up',
                category: 'boxy-i-pudelka',
                price: 149.99,
                images: [
                    '/images/products/box-1-1.jpg',
                    '/images/products/box-1-2.jpg',
                    '/images/products/box-1-3.jpg',
                    '/images/products/box-1-4.jpg',
                    '/images/products/box-1-5.jpg',
                ],
                description: 'Pudełeczko urodzinowe w formie kartki pop-up. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 10,
            },
            {
                name: 'Pudełko Ślubne Exploding Box',
                slug: 'pudelko-slubne-exploding-box',
                category: 'boxy-i-pudelka',
                price: 149.99,
                images: [
                    '/images/products/box-2-1.jpg',
                    '/images/products/box-2-2.jpg',
                    '/images/products/box-2-3.jpg',
                    '/images/products/box-2-4.jpg',
                    '/images/products/box-2-5.jpg',
                ],
                description: 'Pudełko ślubne exlpoding box. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 5,
            },
            {
                name: 'Czekoladownik Urodzinowy',
                slug: 'czekoladownik-urodzinowy',
                category: 'boxy-i-pudelka',
                price: 149.99,
                images: [
                    '/images/products/box-3-1.jpg',
                    '/images/products/box-3-2.jpg',
                    '/images/products/box-3-3.jpg',
                    '/images/products/box-3-4.jpg',
                ],
                description: 'Pudełeczko urodzinowe - czekoladownik. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 2,
            },
            {
                name: 'Grillopak',
                slug: 'grillopak',
                category: 'boxy-i-pudelka',
                price: 149.99,
                images: [
                    '/images/products/box-4-1.jpg',
                    '/images/products/box-4-2.jpg',
                ],
                description: 'Pudełeczko Grillopak, idealne na letnie przyjęcia. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 8,
            },
            {
                name: 'Kartka Box Pop-up',
                slug: 'kartka-box-pop-up',
                category: 'boxy-i-pudelka',
                price: 149.99,
                images: [
                    '/images/products/box-5-1.jpg',
                    '/images/products/box-5-2.jpg',
                    '/images/products/box-5-3.jpg',
                ],
                description: 'Pudełeczko urodzinowe w formie kartki pop-up. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 7,
            },
            {
                name: 'Kartka Bierzmowanie',
                slug: 'kartka-bierzmowanie',
                category: 'kartki-w-kopercie',
                price: 49.99,
                images: [
                    '/images/products/card-envelope-1-1.jpg',
                    '/images/products/card-envelope-1-2.jpg',
                    '/images/products/card-envelope-1-3.jpg',
                ],
                description: 'Kwadratowa kartka w kopercie jako pamiątka Bierzmowania. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 1,
            },
            {
                name: 'Kartka Roczek',
                slug: 'kartka-roczek',
                category: 'kartki-w-kopercie',
                price: 49.99,
                images: [
                    '/images/products/card-envelope-2-1.jpg',
                    '/images/products/card-envelope-2-2.jpg',
                    '/images/products/card-envelope-2-3.jpg',
                    '/images/products/card-envelope-2-4.jpg',
                ],
                description: 'Kartka na roczek w kształcie cyfry 1. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 10,
            },
            {
                name: 'Kartka Komunia',
                slug: 'kartka-komunia',
                category: 'kartki-w-kopercie',
                price: 49.99,
                images: [
                    '/images/products/card-envelope-3-1.jpg',
                    '/images/products/card-envelope-3-2.jpg',
                    '/images/products/card-envelope-3-3.jpg',
                ],
                description: 'Kwadratowa kartka na Pierwszą Komunię. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 7,
            },
            {
                name: 'Kartka Walentynki',
                slug: 'kartka-walentynki',
                category: 'kartki-w-kopercie',
                price: 49.99,
                images: [
                    '/images/products/card-envelope-4-1.jpg',
                    '/images/products/card-envelope-4-2.jpg',
                    '/images/products/card-envelope-4-3.jpg',
                ],
                description: 'Walentynkowa kartka w formacie B5. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 1,
            },
            {
                name: 'Kartka Ślubna',
                slug: 'kartka-slubna',
                category: 'kartki-w-pudelku',
                price: 99.99,
                images: [
                    '/images/products/card-box-1-1.jpg',
                    '/images/products/card-box-1-2.jpg',
                    '/images/products/card-box-1-3.jpg',
                    '/images/products/card-box-1-4.jpg',
                    '/images/products/card-box-1-5.jpg',
                    '/images/products/card-box-1-6.jpg',
                ],
                description: 'Ślubna kartka w pudełku. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 0,
            },
            {
                name: 'Kartka dla Maluszka',
                slug: 'kartka-dla-maluszka',
                category: 'kartki-w-pudelku',
                price: 99.99,
                images: [
                    '/images/products/card-box-2-1.jpg',
                    '/images/products/card-box-2-2.jpg',
                    '/images/products/card-box-2-3.jpg',
                    '/images/products/card-box-2-4.jpg',
                    '/images/products/card-box-2-5.jpg',
                ],
                description: 'Kartka dla maluszka z okazji narodzin lub przyjęcia Chrztu Świętego. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 6,
            },
            {
                name: 'Kartka Ślubna z Wianuszkiem',
                slug: 'kartka-slubna-z-wianuszkiem',
                category: 'kartki-w-pudelku',
                price: 99.99,
                images: [
                    '/images/products/card-box-3-1.jpg',
                    '/images/products/card-box-3-2.jpg',
                    '/images/products/card-box-3-3.jpg',
                    '/images/products/card-box-3-4.jpg',
                    '/images/products/card-box-3-5.jpg',
                ],
                description: 'Ślubna kartka w pudełku, ze zdejmowanym wianuszkiem w kształcie serca. Podaj szczegóły personalizacji w polu "Życzenia" w podsumowaniu zamówienia.',
                quantity: 10,
            },
        ],
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map