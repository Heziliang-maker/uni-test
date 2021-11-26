/*
 * @Date: 2021-11-17
 * @Description: setProps
 */

import { mount } from "@vue/test-utils";
import DataToComponents2 from "@/components/DataToComponents2";

// 为了对此进行全面测试，我们可能需要验证greeting默认情况下是否呈现。我们可以使用 更新show道具setProps()，这会导致greeting隐藏：

test("renders a greeting when show is true", async () => {
  const wrapper = mount(DataToComponents2);

  expect(wrapper.html()).toContain("Hello");

  await wrapper.setProps({ show: false });

  expect(wrapper.html()).not.toContain("Hello");
});

/*
使用props和data安装选项预设组件的状态
用于setProps()在测试期间更新道具。
使用await关键字 beforesetProps 确保 Vue 在测试继续之前更新 DOM。
直接与您的组件交互可以为您提供更大的覆盖范围。考虑使用setValue或trigger结合使用data以确保一切正常。
*/
