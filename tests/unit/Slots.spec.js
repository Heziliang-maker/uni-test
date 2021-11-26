/*
 * @Date: 2021-11-18
 * @Description:
 */

import { mount } from "@vue/test-utils";

import Slots from "@/components/Slots";

test("layout default slot", () => {
  const wrapper = mount(Slots, {
    slots: {
      default: "Main Content",
    },
  });

  expect(wrapper.find("main").text()).toContain("Main Content");
});
