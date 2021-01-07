let array = [];
array[0] = process.argv.slice(2)

let array32 = new Uint32Array(array)

let array16 = new Uint16Array(array32.buffer);

console.log(JSON.stringify(array16))
