<template lang="pug">
h1 {{ title }}
.widget
  SuggestionsButtonGroup
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SuggestionsButtonGroup from "@/components/SuggestionsButtonGroup.vue";

export default defineComponent({
  name: "Widget",
  props: {
    title: String,
  },
  components: {
    SuggestionsButtonGroup,
  },
});
</script>

<style scoped></style>
