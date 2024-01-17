export default {
    finalCounter(state, getters, rootState, rootGetters) {
        console.log({
            "isAuth": rootState.isAuth,
            "isUserAuthenticated": rootGetters.userIsAuthenticated,
            "message": "isAuth access from counter module",
            "getters": getters,
            "rootState": rootState,
            "rootGetters": rootGetters
        });
        return state.counter * 2;
    },
    normaliseCounter(_, getters) {
        const finalCounter = getters.finalCounter;

        if(finalCounter < 0) return 0;
        if(finalCounter > 100) return 100;

        return finalCounter;
    },
}