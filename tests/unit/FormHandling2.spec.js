/*
 * @Date: 2021-11-16
 * @Description:
 */

import { mount } from "@vue/test-utils";

import FormHandling2 from "@/components/FormHandling2";

// 使用各种表单元素
// test("submits a form", async () => {
//   const wrapper = mount(FormHandling2);

//   await wrapper.find("input[type=email]").setValue("my@email.com");

//   await wrapper.find("textarea").setValue("Lorem ipsum dolor sit amet");

//   await wrapper.find("select").setValue("new-york");

//   await wrapper.find("input[type=checkbox]").setChecked(true);

//   await wrapper.find("input[type=radio][value=weekly]").setChecked();

//   expect(wrapper.vm.$el).toMatchSnapshot();
// });

// 触发复杂的事件监听器
test("submits the form", async () => {
  const wrapper = mount(FormHandling2);

  await wrapper.find("input[type=email]").setValue("my@email.com");

  await wrapper.find("textarea").setValue("Lorem ipsum dolor sit amet");

  await wrapper.find("select").setValue("new-york");

  await wrapper.find("input[type=checkbox]").setChecked(true);

  await wrapper.find("input[type=radio][value=weekly]").setChecked();

  await wrapper.find("form").trigger("submit.prevent");

  expect(wrapper.emitted()).toHaveProperty("submit");

  expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
    email: "my@email.com",
    description: "Lorem ipsum dolor sit amet",
    city: "new-york",
    subscribe: true,
    interval: "weekly",
  });
});
