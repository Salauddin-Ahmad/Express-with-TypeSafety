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
// GET route
app.get('/', (req, res) => {
    res.send('Hello Devs Welcome to Node.js!');
    console.log(req.headers);
});
// POST route
app.post("/", (req, res) => {
    console.log('Request received:', req.body);
    res.send("Got data");
});
// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
exports.default = app;
