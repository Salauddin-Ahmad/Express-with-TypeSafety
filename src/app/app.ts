import { NextFunction, Handler } from './../../node_modules/@types/express-serve-static-core/index.d';
import express, { Request, Response } from 'express';

const app = express();

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.text());

const userRouter = express.Router()
const courseRouter = express.Router()

app.use('/api/v1/users', userRouter)
app.use('/api/v1/courses', courseRouter)
userRouter.post('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);

    res.json({
        success: true,  
        mesage: 'User is created successfully',
        data: user,
    })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);

    res.json({
        success: true,
        message: 'Course is created successfully',
        data: course,
    })
})


const logger = (req: Request, res: Response, next: NextFunction) => {
console.log(req.url, req.method, req.hostname)
next()
}

// GET route
app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
    
    try {
        res.send('dfg')
    } catch (error) {
        console.log(error)
        next( )

    //    res.status(400).json({
    //     success: false,
    //     message: 'Error occurred',

    //    })
    }


    // console.log(req.query)
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



app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    });
})


// global error Handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if(error){
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong!'
        })
    }
});



export default app;
