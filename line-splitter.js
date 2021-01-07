var array = require("fs").readFileSync(process.argv[2]).toString().split(String.fromCharCode(10));

for(let i = 0; i < array.length; i++){
  console.log(Buffer.from(array[i]))
}
