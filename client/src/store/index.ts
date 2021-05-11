import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import {
  Currency,
  CurrencyStore,
  CurrencyCode,
  MutationType,
  Preset,
  DonationData,
  ActionType,
  GetterType,
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
    [GetterType.currencies]: (state): Currency[] => {
      return Object.values(state.currencyStore);
    },
    [GetterType.donationData]: (state): DonationData => {
      return {
        amount: state.donationValue,
        currency: state.activeCurrency.code,
      };
    },
  },
  mutations: {
    [MutationType.setDonationValue]: (state, value: number): void => {
      state.donationValue = value;
    },
    [MutationType.setActiveCurrency]: (state, code: CurrencyCode): void => {
      const oldCurrencyRate = state.activeCurrency.rate;

      function convertToUSD(val: number) {
        return val / oldCurrencyRate;
      }

      state.activeCurrency = state.currencyStore[code];

      // Convert to new currency
      state.donationValue = Math.round(
        convertToUSD(state.donationValue) * state.activeCurrency.rate
      );
    },
  },
  actions: {
    [ActionType.setDonationValueByPreset]: (
      { commit, state },
      preset: Preset
    ): void => {
      const value = preset[state.activeCurrency.code];
      commit(MutationType.setDonationValue, value);
    },
    [ActionType.setDonationValueByInput]: ({ commit }, value: number): void => {
      commit(MutationType.setDonationValue, value);
    },
    [ActionType.setActiveCurrency]: ({ commit }, code: CurrencyCode): void => {
      commit(MutationType.setActiveCurrency, code);
    },
    [ActionType.submitDonation]: ({ getters }): void => {
      sendDonation(getters.donationData);
    },
  },
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
