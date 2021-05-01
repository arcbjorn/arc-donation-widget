<template lang="pug">
.app
  Widget(title="Arc Donation Widget")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Widget from "./components/Widget.vue";

export default defineComponent({
  name: "App",
  components: {
    Widget,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
