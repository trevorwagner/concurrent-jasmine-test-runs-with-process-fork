import { fork } from 'node:child_process'

async function executeTestRun(runId) {
    return new Promise(async (resolve, reject) => {
        const testRun = fork('./src/run-test-suite.js');

        testRun.on('message', (msg) => {
            if (msg === 'complete') {
                testRun.send('quit');
            }
        })

        testRun.on('close', ()=>{
            console.log(`test run ${runId} completed.`)
        })

        testRun.send('start');

        resolve();
    })
}


// function main()
for (let i = 0; i < 10; i++) {
    (async () => {
        await executeTestRun(i)
    })()
}