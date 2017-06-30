<template>
    <div>
        <h1>Hello World</h1>
        <p>
            This is a Vue.js component that has a parameter named 'foobar' with a value specified of {{foobar}}.
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        foobar: String
    }
})
export default class HelloWorld extends Vue {
}
</script>

<style>

</style>
