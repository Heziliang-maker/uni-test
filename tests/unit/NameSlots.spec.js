/*
 * @Date: 2021-11-18
 * @Description:
 */

import { mount } from "@vue/test-utils";

import NameSlots from "@/components/NameSlots";

test("layout full page layout", () => {
  const wrapper = mount(NameSlots, {
    slots: {
      header: "<div>header</div>",
      footer: "<div>footer</div>",
      main: "<div>main</div>",
    },
  });

  expect(wrapper.html()).toContain("<div>header</div>");
  expect(wrapper.html()).toContain("<div>footer</div>");
  expect(wrapper.html()).toContain("<div>main</div>");
});
