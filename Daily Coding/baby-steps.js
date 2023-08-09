
let args = process.argv, sum = 0

for (let i = 2; i < args.length;i++){
    sum = sum + Number(args[i])
}

console.log(sum)