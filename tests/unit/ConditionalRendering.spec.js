/*
 * @Date: 2021-11-15
 * @Description: 条件渲染
 */

import { mount } from "@vue/test-utils";
import ConditionalRendering from "@/components/ConditionalRendering.vue";

test("use a link", async () => {
  const wrapper = mount(ConditionalRendering);

  //get()假设元素确实存在并在它们不存在时抛出错误。这是不建议使用它断言存在。
  const profileLink = wrapper.get("#profile");
  //  为此，我们使用find()和exists()。下一个测试断言如果admin是false（默认情况下是），则管理链接不存在：为此，我们使用find()和exists()。下一个测试断言如果admin是false（默认情况下是），则管理链接不存在：

  expect(profileLink.text()).toEqual("My Profile");
});

test("dose not render an admin link", () => {
  const wrapper = mount(ConditionalRendering);
  expect(wrapper.find("#admin").exists()).toBe(false);
});

test("renders an admin link", () => {
  /**
   * 最后的测试是断言，当管理员链接呈现admin的true。这是false默认的，但我们可以覆盖，使用第二个参数mount()的mounting options。
   */
  const wrapper = mount(ConditionalRendering, {
    data() {
      return {
        admin: true,
      };
    },
  });
  // expect(wrapper.find("#admin").exists()).toBe(true);
  expect(wrapper.get("#admin").text()).toEqual("Admin");
});

/**
 * 
 * isVisible()提供检查隐藏元素的能力。特别是isVisible()将检查：
元素或其祖先具有display: none, visibility: hidden,opacity :0样式
元素或其祖先位于折叠<details>标签内
元素或其祖先具有hidden属性
对于这些情况中的任何一种，isVisible()返回false.
 */
test("does not show the user dropdown", () => {
  const wrapper = mount(ConditionalRendering);
  expect(wrapper.get("#user-dropdown").isVisible()).toBe(false);
});
