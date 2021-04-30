import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
