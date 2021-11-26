/*
 * @Date: 2021-11-18
 * @Description:
 */

import Slots from "@/components/Slots";

import { mount } from "@vue/test-utils";

/**
 * 传递一个插槽数组
 */

test("multiple slots", () => {
  const wrapper = mount(Slots, {
    slots: {
      default: ['<div id="a"></div>', '<div id="b"></div>'],
    },
  });

  expect(wrapper.find("#a").exists()).toBe(true);
  expect(wrapper.find("#b").exists()).toBe(true);
});
