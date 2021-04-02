export const state = () => ({
  totalCount: 0
})

export const mutations = {
  update(state) {
    state.totalCount += 1;
  }
}
