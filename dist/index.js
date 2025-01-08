"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
const prisma = new client_1.PrismaClient();
app.get('/', (req, res) => {
    res.send('Hello, TypeScript + Node.js + Express!. I am testing out the Docker and learning it.');
});
app.post('/adduser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        const newUser = yield prisma.user.create({
            data: {
                name,
                email,
            },
        });
        return res.json({
            msg: 'User created successfully',
            user: newUser,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
