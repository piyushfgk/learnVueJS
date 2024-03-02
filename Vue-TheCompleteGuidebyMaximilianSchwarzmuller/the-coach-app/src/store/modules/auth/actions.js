let timer

export default {
  async login(context, payload) {
    context.dispatch('authentication', {
      ...payload,
      mode: 'login'
    })
  },
  async signup(context, payload) {
    context.dispatch('authentication', {
      ...payload,
      mode: 'signup'
    })
  },
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

    // const expiresIn = 10000 // For testing
    const expiresIn = responseData.expiresIn * 1000
    const expirationDate = new Date().getTime() + expiresIn

    localStorage.setItem('tokenExpiration', expirationDate)
    localStorage.setItem('token', responseData.idToken)
    localStorage.setItem('userId', responseData.localId)

    timer = setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn
    })
  },
  tryLogin(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()

    if (expiresIn < 0) {
      return
    }

    setTimeout(() => {
      context.dispatch('autoLogout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  },
  logout(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null
    })
  },
  autoLogout(context) {
    context.dispatch('logout')
    context.commit('setAutoLogout')
  }
}
