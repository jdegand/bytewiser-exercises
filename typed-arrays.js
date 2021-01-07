process.stdin.on('data', function (buff) {
    console.log(JSON.stringify(Uint8Array.from(buff)));
});
