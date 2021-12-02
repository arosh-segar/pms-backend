"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const keys_1 = __importDefault(require("./config/keys"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, express_session_1.default)({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
        store: new connect_mongo_1.default({
            mongoUrl: keys_1.default.mongoURI,
            ttl: 14 * 24 * 60 * 60,
            autoRemove: 'native',
        }),
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map