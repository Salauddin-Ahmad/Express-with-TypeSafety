"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware for parsing request bodies
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        mesage: 'User is created successfully',
        data: user,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'Course is created successfully',
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// GET route
app.get('/', logger, (req, res, next) => {
    try {
        res.send('dfg');
    }
    catch (error) {
        console.log(error);
        next();
        //    res.status(400).json({
        //     success: false,
        //     message: 'Error occurred',
        //    })
    }
    // console.log(req.query)
    res.send('Hello Devs Welcome to Node.js!');
});
// POST route
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send("Got data");
});
// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    });
});
// global error Handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'Something went wrong!'
        });
    }
});
exports.default = app;
