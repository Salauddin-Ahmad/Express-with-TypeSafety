import { Server } from 'http';
import app from './app'

const PORT = 5000;


let server: Server;

async function bootStrap(){
     server = app.listen(PORT, () => {
        console.log(`Example app is listening on ${PORT}`)
    });
} 



app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })