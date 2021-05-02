<template lang="pug">
h1 {{ title }}
.widget
  SuggestionsButtonGroup
  DonationBox
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SuggestionsButtonGroup from "@/components/SuggestionsButtonGroup.vue";
import DonationBox from "@/components/DonationBox.vue";

export default defineComponent({
  name: "Widget",
  props: {
    title: String,
  },
  components: {
    SuggestionsButtonGroup,
    DonationBox,
  },
});
</script>

<style scoped></style>
