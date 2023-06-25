import { createServer } from "http";

let myPort = 1607


const server = createServer( (req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    }
    if (req.url === "/api/courses") {
        res.write(JSON.stringify(["Python", "JavaScript", "Mozilla"]));
        res.end();
    }
})

// server.on('connection', (socket) => {
//     console.log("New connection.....");
// })

server.listen(myPort);

console.log(`Listening on port ${myPort}....`);