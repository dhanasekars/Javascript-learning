## SECTION 3: NPM

```js
import { writeFileSync, appendFileSync } from "fs"
import { add } from "./utils.js"
writeFileSync("notes.txt", "My name is Dhanasekar Subramaniam.")
appendFileSync("notes.txt", "\nWill this be a new line?")
console.log(add(4, 5))
console.log(validator.isEmail("dhanasekars@gmail.com"))

console.log(
    chalk.yellow.bold.dim("Hello ") +
        chalk.green.dim("World ") +
        chalk.bgBlue("!"),
)
```

## SECTION 4: FS and Command Line Arguments
