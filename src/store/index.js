// import Vue from "vue";
// import Vuex from "vuex";


// Vue.use(Vuex);  

// let defaultCity = "上海";
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city;
//   }
// } catch (e) {}


// export default new Vuex.Store({
//   state: {
//     city: defaultCity
//   },
//   actions: {
//     changeCity(ctx, city) {
//       console.log(city);
//       ctx.commit("changeCity", city);
//     }
//   },
//   mutations: {
//     changeCity(state, city) {
//       state.city = city;
//       try {
//         localStorage.city = city;
//       } catch (e) {}
//     }
//   }
// });


import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from './actions'
import mutations from "./mutations";
import getters from "./getters";
 Vue.use(Vuex);  

export default new Vuex.Store({
state:state,
actions:actions,
mutations:mutations,
getters:getters,

})

































// import Vue from "vue";
// import Vuex from "vuex";
// import state from "./state";
// import mutations from "./mutations";

// export default new Vuex.Store({

// state:state,
// mutations:mutations,



// })