export default {
  addRequest(state, payload) {
    state.requests.push(payload)
    console.log(payload)
  },
  setRequests(state, payload) {
    console.log(payload)
    state.requests = payload
  }
}
