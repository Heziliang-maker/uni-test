/*
 * @Date: 2021-11-15
 * @Description:
 */

import { mount } from "@vue/test-utils";

import ToDoApp from "@/components/ToDoApp";

test("renders a todo", () => {
  const wrapper = mount(ToDoApp);

  const todo = wrapper.get('[data-test="todo"]');

  expect(todo.text()).toBe("Learn Vue.js 3");
});

test("add a todo", async () => {
  const wrapper = mount(ToDoApp);

  /**
   * 待办事项的数量没有增加。问题是 Jest 以同步方式执行测试，一旦调用最终函数就结束测试。然而，
   * Vue 异步更新 DOM。我们需要标记 test async，并调用await任何可能导致 DOM 更改的方法。trigger是这样的一种方法，
   * 也是setValue- 我们可以简单地预先准备await，测试应该按预期工作：
   */

  // const todo = wrapper.get('[data-test="todo"]');
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

  await wrapper.get('[data-test="input"]').setValue("新的todo");
  await wrapper.get('[data-test="form"]').trigger("submit");

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

  // expect(todo.text()).toBe("Learn Vue.js 3");
});

test("complete a todo", async () => {
  const wrapper = mount(ToDoApp);
  await wrapper.get('[data-test="check"]').setChecked(true);
  expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
});
