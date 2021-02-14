import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import Portfolio from './modules/portfolio';
Vue.use(Vuex);
import * as actions from './actions';
export default new Vuex.Store({
modules: {
    actions,
    stocks,
    Portfolio
}
});
