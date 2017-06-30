
    var testsContext = require.context("../..", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    