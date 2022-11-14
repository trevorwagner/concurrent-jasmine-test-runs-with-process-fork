import Jasmine from 'jasmine'

const runTestSuite = async () => {
    return new Promise(async (resolve, reject) => {
        const jasmine = new Jasmine();
        jasmine.exitOnCompletion = false;

        jasmine.addMatchingSpecFiles(['tests/**/*.spec.js'])

        await jasmine.execute().then(() => {
            resolve()
        })
    })
}

process.on('message', async (msg) => {
    switch (msg) {
        case 'start': {
            console.log()
            await runTestSuite().then(() => {
                process.send('complete')
            })
            break;
        }
        case 'quit': {
            process.exit();
            // no need to break since we're shutting everything down.
        }
    }
});

