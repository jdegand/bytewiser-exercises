var buff = '';
process.stdin.on('data', function(d) {
  buff += d;
}).on('end', function() {
    console.log(Buffer.from(buff))
}).setEncoding('utf8');
