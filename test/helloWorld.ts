import { assert } from "chai";
import Vue from 'vue';
import HelloWorld from "../src/helloWorld.vue";

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
