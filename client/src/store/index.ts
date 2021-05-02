import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { Currency, CurrencyCode, MutationType, Preset } from "@/types";
import { currencies, initPresets } from "./initStore";

export interface State {
  currencies: Currency[];
  presets: Preset[];
  donationValue: number;
  activeCurrency: Currency;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({
  state: {
    currencies,
    presets: initPresets(),
    donationValue: 40,
    activeCurrency: currencies[0],
  },
  mutations: {
    setDonationValue(state, value: number): void {
      state.donationValue = value;
    },
  },
  actions: {
    setDonationValue({ commit, state }, value: Preset | number): void {
      const val =
        typeof value === "number"
          ? value
          : value[state.activeCurrency.code as CurrencyCode];
      commit(MutationType.setDonationValue, val);
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
