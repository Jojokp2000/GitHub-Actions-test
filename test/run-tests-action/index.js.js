const core = require('@actions/core');
const jest = require('jest');

const options = { root: [__dirname] }

jest.runCLI(options, options.root)
.then(results => {
    if (results.results.success) {
        core.setOutput('results', results);
    } else {
        core.setFailed('At least 1 test failed.');
    }
})




