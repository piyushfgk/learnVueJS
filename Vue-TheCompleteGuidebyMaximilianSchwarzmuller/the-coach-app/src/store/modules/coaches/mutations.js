export default {
  registerCoach(state, payload) {
    state.coaches.push(payload)
  },
  setCoaches(state, payload) {
    console.log(payload)
    state.coaches = payload
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime()
  }
}
