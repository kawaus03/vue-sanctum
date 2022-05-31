import { InjectionKey } from 'vue'
import { createStore, MutationTree, ActionTree, GetterTree, Store, useStore as baseUseStore } from 'vuex'
import { RootState } from '../types/store/index'

import { user } from './user'

const getters: GetterTree<RootState, RootState> = {}

const mutations: MutationTree<RootState> = {}

const actions: ActionTree<RootState, RootState> = {}

export const key: InjectionKey<Store<RootState>> = Symbol()

export const store = createStore({
  getters,
  mutations,
  actions,
  modules: {
    user
  }
})

export const useStore = (): Store<RootState> => {
  return baseUseStore(key)
}
