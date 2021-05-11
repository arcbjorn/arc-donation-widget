<template lang="pug">
div
  .donation-box
    .currency-sign {{ activeCurrency.symbol }}
    input.donation-input(
      type="number"
      :value.number="donationValue"
      @input="setValue($event.target.value)"
      @keypress="handleNan"
    )
    CurrencySelect

</template>

<script lang="ts">
//- @keyup.enter="submit"
import { State } from "@/store";
import { ActionType, Currency } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import CurrencySelect from "./CurrencySelect.vue";

export default defineComponent({
  name: "DonationBox",
  components: {
    CurrencySelect,
  },
  computed: {
    ...mapState({
      // using object syntax, because linter argues - typisation is not deep
      activeCurrency: (state): Currency => (state as State).activeCurrency,
      donationValue: (state): number => (state as State).donationValue,
    }),
  },
  methods: {
    ...mapActions([ActionType.setDonationValueByInput]),
    setValue(v: string) {
      this.setDonationValueByInput(+v);
    },
    handleNan(event: KeyboardEvent) {
      if (isNaN(Number(event.key))) {
        return event.preventDefault();
      }
    },
  },
});
</script>

<style scoped></style>
