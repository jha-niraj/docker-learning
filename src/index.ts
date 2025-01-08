import express, { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!. I am testing out the Docker and learning it.');
});
app.post('/adduser', async (req: any, res: any) => {
    const { name, email } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        return res.json({
            msg: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});