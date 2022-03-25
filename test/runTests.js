const jest = require('jest');

async function runTests() {

  const options = { root: [__dirname] }

  const results = await jest.runCLI(options, options.root);
  

  console.log(results.results.success);
  return results.results.success;
}

runTests();
