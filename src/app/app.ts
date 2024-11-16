import express, { Request, Response } from 'express';

const app = express();

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.text());

// GET route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Devs Welcome to Node.js!');
    console.log(req.headers)
});

// POST route
app.post("/", (req: Request, res: Response) => {
    console.log('Request received:', req.body);
    res.send("Got data");
});

// Error handling middleware (optional)
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

export default app;
