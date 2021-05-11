import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import {
  Currency,
  CurrencyStore,
  CurrencyCode,
  MutationType,
  Preset,
  DonationData,
} from "@/types";
import { initCurrencyStore, initPresets } from "./initStore";
import sendDonation from "@/api/sendDonation";

export interface State {
  currencyStore: CurrencyStore;
  presets: Preset[];
  donationValue: number;
  activeCurrency: Currency;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = initCurrencyStore();
const presetsArray = initPresets();

export default createStore({
  state: {
    currencyStore: store,
    presets: presetsArray,
    donationValue: 40,
    activeCurrency: store[CurrencyCode.USD],
  },
  getters: {
    currencies(state): Currency[] {
      return Object.values(state.currencyStore);
    },
    donationData(state): DonationData {
      return {
        amount: state.donationValue,
        currency: state.activeCurrency.code,
      };
    },
  },
  mutations: {
    setDonationValue(state, value: number): void {
      state.donationValue = value;
    },
    setActiveCurrency(state, value: string): void {
      const oldCurrencyRate = state.activeCurrency.rate;

      function convertToUSD(val: number) {
        return val / oldCurrencyRate;
      }

      state.activeCurrency = state.currencyStore[value];

      // Convert to new currency
      state.donationValue = Math.round(
        convertToUSD(state.donationValue) * state.activeCurrency.rate
      );
    },
  },
  actions: {
    setDonationValueByPreset({ commit, state }, preset: Preset): void {
      const value = preset[state.activeCurrency.code as CurrencyCode];
      commit(MutationType.setDonationValue, value);
    },
    setDonationValueByInput({ commit }, value: number): void {
      commit(MutationType.setDonationValue, value);
    },
    setActiveCurrency({ commit }, code: string): void {
      commit(MutationType.setActiveCurrency, code);
    },
    submitDonation({ getters }): void {
      sendDonation(getters.donationData);
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
