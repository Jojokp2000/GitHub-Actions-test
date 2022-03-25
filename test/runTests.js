const jest = require('jest');

async function runTests() {

  const options = { root: [__dirname] }

  const results = await jest.runCLI(options, options.root);
  

  if (results.results.success) {
    process.env.TESTS_PASSED = 'TRUE';
  } else {
    process.env.TESTS_PASSED = 'FALSE';
  }
}

runTests();
