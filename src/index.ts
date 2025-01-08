import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript + Node.js + Express!. I am testing out the Docker and learning it.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});