/*
 * @Date: 2021-11-18
 * @Description: 作用域插槽
 */

/**
 * 
 * 使用slots安装选项来测试组件使用<slot>是否正确呈现内容。
内容可以是字符串、渲染函数或导入的 SFC。
使用default默认插槽，以及一个名为插槽正确的名称。
#还支持作用域插槽和速记。
 */

import { mount } from "@vue/test-utils";
import ScopedSlots from "@/components/ScopedSlots";

test("scoped slots", () => {
  const wrapper = mount(ScopedSlots, {
    scopedSlots: {
      scoped: ` <template slot-scope="params">
      Hello  {{params.msg}}
      </template>`,
    },
  });

  expect(wrapper.html()).toContain("Hello world");
});
