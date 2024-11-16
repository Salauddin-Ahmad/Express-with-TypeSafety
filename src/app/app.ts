import { NextFunction } from './../../node_modules/@types/express-serve-static-core/index.d';
import express, { Request, Response } from 'express';

const app = express();

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
console.log(req.url, req.method, req.hostname)
next()
}

// GET route
app.get('/', logger, (req: Request, res: Response) => {
    console.log(req.query)
    // console.log(req.headers)
    res.send('Hello Devs Welcome to Node.js!');
});

// POST route
app.post("/",logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Got data");
});

// Error handling middleware (optional)
app.use((err: Error, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

export default app;
