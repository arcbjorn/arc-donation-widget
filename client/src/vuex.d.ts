import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Currency, Preset } from "@/types";

declare module "@vue/runtime-core" {
  interface State {
    currencies: Currency[];
    presets: Preset[];
    donationValue: number;
    activeCurrency: Currency;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
