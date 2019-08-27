import { ActionTree } from 'vuex';
import jwt_decode from 'jwt-decode';
import { asyncRouterMap } from '../router';

const actions: ActionTree<any, any> = {
    setUser({ state, commit }, user: any) {
        console.log(1239988)
        const decoded: any = jwt_decode(user);
        commit('SET_USER', decoded);
        console.log('asyncRouterMap', asyncRouterMap)
        commit('SET_ROUTERS', asyncRouterMap)
    }
}

export default actions;