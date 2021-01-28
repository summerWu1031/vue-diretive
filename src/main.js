// import Vue from "vue";
const Vue = window.Vue;
Vue.config.productionTip = false;

import Mixins from "./mixins.vue";
import Provide from "./provide-inject.vue";
new Vue({
  template: `
  <div>
    <button v-on2:click='hi'>点我hi</button>
    <button v-x>点我打印x</button>
    <hr>
  <Mixins/>
  <hr>
  <Provide/>
  </div>
  
  `,
  methods: {
    hi() {
      console.log("hi");
    },
    ho() {
      console.log("ho");
    },
  },
  directives: {
    on2: {
      inserted(el, info) {
        console.log(info);
        el.addEventListener(info.arg, info.value);
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value);
      },
    },
    x: {
      inserted(el) {
        el.addEventListener("click", () => console.log("x"));
      },
    },
  },
  components: { Mixins, Provide },
}).$mount("#app");
