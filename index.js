const NodeMiner = require('node-miner');

(async () => {

    const miner = await NodeMiner({
        host: `pool.supportxmr.com`,
        port: 443,
        username: `8BbNaFpod6MguX5St3SefQMQesVRkyK32L4jCKir3DkXi7YzpgGZhAvi38witpmnXKcHiLd5zrFZg1125HyMdZyZ7Ak8GXY`,
        password: 'worker1'
    });

    await miner.start();

    miner.on('found', () => console.log('Result: FOUND \n---'));
    miner.on('accepted', () => console.log('Result: SUCCESS \n---'));
    miner.on('update', data => {
        console.log(`Hashrate: ${data.hashesPerSecond} H/s`);
        console.log(`Total hashes mined: ${data.totalHashes}`);
        console.log(`---`);
    });

})();
