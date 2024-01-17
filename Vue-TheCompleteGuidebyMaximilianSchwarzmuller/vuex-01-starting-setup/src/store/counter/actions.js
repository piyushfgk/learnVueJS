export default {
    increment(context) {
        console.log(context);
        context.commit('increment');
    },
    increase(context, payload) {
        setTimeout(() => {
            context.commit('increase', payload);
        }, 1500); // Execute after 1.5 seconds
        // actions are allowed to run async code
    },
}