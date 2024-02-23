export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    }
    const response = await fetch(
      `https://vue-http-demo-c7025-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to sent request')
      throw error
    }

    console.warn('An ID return by firebase for every POST request (name): ' + responseData.name)

    newRequest.id = responseData.name
    newRequest.coachId = payload.coachId

    context.commit('addRequest', newRequest)
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId
    const response = await fetch(
      `https://vue-http-demo-c7025-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`
    )
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to sent request')
      throw error
    }

    const requests = []

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      }
      requests.push(request)
    }

    context.commit('setRequests', requests)
  }
}
