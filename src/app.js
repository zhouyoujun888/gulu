import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import buttonGroup from "./button-group.vue";
import spies from "chai-spies";
chai.use(spies);

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", buttonGroup);
new Vue({
  el: "#app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    };
  },
});

//单元测试1 icon
import chai from "chai";
let expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount("#test");
  let useElement = vm.$el.querySelector("use");
  let herf = useElement.getAttribute("xlink:href");
  expect(herf).to.equal("#i-settings");
  vm.$el.remove();
  vm.$destroy();
}
//单元测试2 loading
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      loading: true,
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let herf = useElement.getAttribute("xlink:href");
  expect(herf).to.equal("#i-loading");
  vm.$el.remove();
  vm.$destroy();
}
//单元测试3 默认icon为settings order为‘1’
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.equal("1");
  vm.$el.remove();
  vm.$destroy();
}
//单元测试4 默认iconPosition为right order为‘1’
{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right",
    },
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svg);
  expect(order).to.equal("1");
  vm.$el.remove();
  vm.$destroy();
}
//单元测试5 click事件 使用chai-spies间谍函数   mock
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount();
  let spy = chai.spy(() => {});
  vm.$on("click", spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called;
}
