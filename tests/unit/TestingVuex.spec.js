/*
 * @Date: 2021-11-29
 * @Description:
 */

import { mount, createLocalVue } from "@vue/test-utils";
import Home from "@/views/Home.vue";

import Vuex from "vuex";


// 实例化vuex之前 use
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

const wrapper = mount(Home, { store, localVue });

test("vuex", async () => {
  await wrapper.find("button").trigger("click");

  expect(wrapper.html()).toContain("Count:1");
});
