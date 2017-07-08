# vuejs-test-mocha-typescript-example

This is an example project demonstrating how to test Vue.js components defined with [vue-class-component](https://github.com/vuejs/vue-class-component) decorators using Mocha and TypeScript.

## Run Tests

To execute the test suite, run `npm test`.

## Overview

The [Unit Testing](https://vuejs.org/v2/guide/unit-testing.html) guide for Vue.js does an excellent job explaining how to test components but if you are utilitizing TypeScript and vue-class-component decorators, testing is just as straightforward but does require a slightly different setup.

In this project, there is a single file component defined in `src/helloWorld.vue` and a corresponding unit test in `/test/helloWorld.ts`.

This single test defined in this file, instantiates the helloWorld component with a property value and ensures this value is rendered correctly.

```
describe("HelloWorld", () => {
    // Inspect the component instance on mount
    it("correctly sets the foobar value when created", () => {
        let foobar = "fooboo";
        const ctor = Vue.extend(HelloWorld);
        const vm: any = new ctor({ propsData: { foobar } }).$mount();

        assert.equal(vm.foobar, foobar);
        assert.include(vm.$el.textContent, `value specified of ${foobar}`);
    });
});
```

Since helloWorld.vue is a single file component, it must be processed with Webpack before it can be tested with Mocha.  [mocha-webpack](https://github.com/zinserjan/mocha-webpack) is used to run the tests and source files through Webpack (with config defined in `test/support/webpack.config.js`) and then execute the tests with Mocha, all with a single command.

Additionally, since Vue.js components assume a DOM context and these tests are run from Node.js, [jsdom](https://github.com/tmpvar/jsdom) is used to mock the DOM (bootstraped from `test/support/domMocker.js`).
