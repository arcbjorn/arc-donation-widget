<template lang="pug">
select(:value="activeCurrency.code" @change="setActiveCurrency($event.target.value)")
  option(
    v-for="currency, i in currencies"
    key="i"
    :value="currency.code"
  ) {{ currency.code }}
</template>

<script lang="ts">
import { ActionType, GetterType, StateType } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "CurrencySelect",
  computed: {
    ...mapGetters([GetterType.currencies]),
    ...mapState([StateType.activeCurrency]),
  },
  methods: {
    ...mapActions([ActionType.setActiveCurrency]),
  },
});
</script>

<style scoped></style>
