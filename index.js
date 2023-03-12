const NodeMiner = require('node-miner');
const http = require('http');  

(async () => {
 
  // Create miner
  const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 443,
        username: `8BbNaFpod6MguX5St3SefQMQesVRkyK32L4jCKir3DkXi7YzpgGZhAvi38witpmnXKcHiLd5zrFZg1125HyMdZyZ7Ak8GXY`,
        password: 'worker1'
    });
 
  // Start miner
  await miner.start();
 
  // Listen on events
  miner.on('found', () => console.log('Found!!'))
  miner.on('accepted', () => console.log('Accepted!!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
 
  const requestHandler = (request, response) => {  
    console.log(request.url)
    response.end('Running the Monero Miner!!')
  }

  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })

  // Stop miner
  //setTimeout(async () => await miner.stop(), 60000);
})();
