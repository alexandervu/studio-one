<template>
  <sto-bar resizer="e">some text here</sto-bar>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a
      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank"
    >Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using
    <code>&ltscript setup&gt;</code>)
  </p>
  <sto-bar resizer="n">and some content here</sto-bar>
  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/core.html" target="_blank">Vite Docs</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import OneBar from '../../lib/bar/Bar.vue'
export default defineComponent({
  name: 'HelloWorld',
  components: {
    OneBar
  },
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
