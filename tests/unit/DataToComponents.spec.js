/*
 * @Date: 2021-11-17
 * @Description:
 */

import { mount } from "@vue/test-utils";
import DataToComponents from "@/components/DataToComponents";

test("renders an error if length is too short", async () => {
  const wrapper = mount(DataToComponents, {
    props: {
      minLenth: 4,
    },
    data() {
      return {
        password: "asd",
      };
    },
  });

  expect(wrapper.html()).toContain("Password must be at least 10 characters");
});
