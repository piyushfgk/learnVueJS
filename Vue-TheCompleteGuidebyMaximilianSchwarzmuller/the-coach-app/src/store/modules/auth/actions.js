export default {
  async authentication(context, payload) {
    const mode = payload.mode
    const key = context.state.apiKey
    const url = mode === 'login' ? context.state.signinUrl : context.state.signupUrl

    const response = await fetch(`${url}?key=${key}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })

    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData)
      const error = new Error(
        responseData.error.message || 'Failed to authenticate. Check your login data!'
      )
      throw error
    }

    console.log({
      mode: mode,
      responseData: responseData
    })
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    })
  }
}
