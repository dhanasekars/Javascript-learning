import ps from "ps-node";

console.log("Entering...");
ps.lookup( {}, (err, processes) => {
    console.log("inside lookup...");

    if (err) {
        return cb(err);
    }

processes.forEach((process) => {
    // console.log("inside each process...");

    const { pid, name, connections } = process;
    console.log(pid);
    if (connections ) {
        console.log("inside each connection..."); 
        connections.forEach((conn) => {
            if (conn.state === "LISTEN") {
                console.log(`Process: ${name} | Port: ${conn.localPort}`);
            }
        })
    }
})
})