async function runTests() {

  const options = { root: [__dirname] }

  const testResults = await jest.runCLI(options, options.root);
  
  console.log(testResults);
}

runTests();
