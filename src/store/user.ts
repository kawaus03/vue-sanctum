import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import { RootState } from '~/types/store/index'
import { UserState } from '~/types/store/user'
import { UserAttributes } from '~/types/models/user'

const initialValues: UserState = {
  user: undefined
}

const state = (): UserState => (initialValues)

const getters: GetterTree<UserState, RootState> = {}

const mutations: MutationTree<UserState> = {
  setUser (state, user?: UserAttributes) {
    state.user = user
  }
}

const actions: ActionTree<UserState, RootState> = {}

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
