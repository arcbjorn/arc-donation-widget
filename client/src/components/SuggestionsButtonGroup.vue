<template lang="pug">
.button-group
  button(
    v-for="preset, i in presets"
    :key="i"
    :class="getActiveButton(preset)"
    @click="setDonationValueByPreset(preset)"
  ) {{ `${activeCurrency.symbol}${getValue(preset)}` }}
</template>

<script lang="ts">
import { State } from "@/store";
import { ActionType, Currency, Preset } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default defineComponent({
  name: "SuggestionsButtonGroup",
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      presets: (state): Preset[] => (state as State).presets,
      activeCurrency: (state): Currency => (state as State).activeCurrency,
      donationValue: (state): number => (state as State).donationValue,
    }),
  },
  methods: {
    ...mapActions([ActionType.setDonationValueByPreset]),
    getActiveButton(preset: Preset): string {
      if (this.donationValue === preset[this.activeCurrency.code]) {
        return "bg-green-500 text-white border-transparent";
      } else {
        return "bg-white border-gray-400 hover:bg-green-100";
      }
    },
    getValue(preset: Preset) {
      return preset[this.activeCurrency.code].toLocaleString("en-US");
    },
  },
});
</script>

<style scoped></style>
