/*
 * @Date: 2021-11-16
 * @Description:
 */

import { mount } from "@vue/test-utils";
import FormHandling from "@/components/FormHandling.vue";

test("sets the value", async () => {
  const wrapper = mount(FormHandling);

  const input = wrapper.find("input");

  await input.setValue("my@email.com");

  expect(input.element.value).toBe("my@email.com");
});

test("emits an event", async () => {
  const wrapper = mount(FormHandling);

  const button = wrapper.find("button");

  await button.trigger("click");

  expect(wrapper.emitted()).toHaveProperty("submit");
});

test("emits the input with value", async () => {
  const wrapper = mount(FormHandling);

  const button = wrapper.find("button");

  const input = wrapper.find("input");

  await input.setValue("my@email.com");

  await button.trigger("click");

  expect(wrapper.emitted()).toHaveProperty("submit");

  const emitEvent = wrapper.emitted("submit");

  expect(emitEvent[0][0]).toBe("my@email.com");
});
