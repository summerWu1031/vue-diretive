import log from "./mixins/log.js";
const Vue = window.Vue;
const myVue = Vue.extend({
  mixins: [log],
});

export default myVue;
