/*
 * @Date: 2021-11-29
 * @Description: vuex mock 单元测试可能会分别隔离和测试组件和存储。如果您有一个包含复杂存储的非常大的应用程序，这会很有用。对于这个用例，您可以模拟您有兴趣使用的商店部分global.mocks
 */

import { mount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

test("vuex using a mock store", async () => {
  const $store = {
    state: {
      count: 25,
    },
    commit: jest.fn(),
  };

  const wrapper = mount(Home, {
    mocks: {
      $store,
    },
  });

  expect(wrapper.html()).toContain("Count:25");
  await wrapper.find("button").trigger("click");
  expect($store.commit).toHaveBeenCalled();
});

/**
 * 您可能希望完全隔离地测试您的 Vuex 更改或操作，尤其是当它们很复杂时。为此，您不需要 Vue Test Utils，
 * 因为 Vuex 商店只是普通的 JavaScript。以下是increment不使用 Vue Test Utils测试突变的方法：(vue2无法)
 */

test("increment mutation", () => {
  const store = new Vuex.Store({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) {
        state.count += 1;
      },
    },
  });

  store.commit("increment");
  expect(store.state.count).toBe(1);
});

/**
 * 
有时，让 Vuex 存储处于特定状态以进行测试可能很有用。除了 之外global.mocks，
您可以使用的一种有用技术是创建一个函数，该函数包装createStore并接受一个参数来为初始状态设定种子。
在这个例子中，我们扩展increment了一个额外的参数，它将被添加到state.count. 如果没有提供，我们只增加state.count1。
 */

const createVuexStore = (initialState) => {
  return new Vuex.Store({
    state: {
      count: 0,
      ...initialState,
    },
    mutations: {
      increment(state, value = 1) {
        state.count += value;
      },
    },
  });
};

test("increment without passing a value", async () => {
  const store = createVuexStore({ count: 20 });

  store.commit("increment");
  expect(store.state.count).toBe(21);
});

test("increment with  a value", async () => {
  const store = createVuexStore({ count: 20 });

  store.commit("increment", 10);
  expect(store.state.count).toBe(30);
});
