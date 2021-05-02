<template lang="pug">
h1 {{ title }}
.widget
  SuggestionsButtonGroup
  DonationBox
  button.donate-btn(@click="submitDonation") Donate
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SuggestionsButtonGroup from "@/components/SuggestionsButtonGroup.vue";
import DonationBox from "@/components/DonationBox.vue";
import { mapActions } from "vuex";
import { ActionType } from "@/types";

export default defineComponent({
  name: "Widget",
  props: {
    title: String,
  },
  components: {
    SuggestionsButtonGroup,
    DonationBox,
  },
  methods: {
    ...mapActions([ActionType.submitDonation]),
  },
});
</script>

<style scoped></style>
