const core = require('@actions/core');
const jest = require('jest');

async function runTests() {

  const options = { root: [__dirname] }

  const results = await jest.runCLI(options, options.root);
  

  if (results.results.success) {
    core.setOutput('results', results);
  } else {
    core.setFailed();
  }
}

runTests();
