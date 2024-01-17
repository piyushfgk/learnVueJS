import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default counterModule;