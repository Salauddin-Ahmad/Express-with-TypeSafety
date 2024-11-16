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
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// GET route
app.get('/', logger, (req, res) => {
    console.log(req.query);
    // console.log(req.headers)
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
exports.default = app;
