"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const express = require("express");
const path_1 = require("path");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: process.env.FRONTEND_URL,
            credentials: true,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const expressApp = app.getHttpAdapter().getInstance();
    const clientBuildPath = (0, path_1.join)(process.cwd(), 'client', 'build');
    expressApp.use(express.static(clientBuildPath));
    expressApp.get('*', (_, res) => {
        res.sendFile((0, path_1.join)(clientBuildPath, 'index.html'));
    });
    const port = process.env.PORT || 5000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.prod.js.map