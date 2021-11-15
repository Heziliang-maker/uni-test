/*
 * @Date: 2021-11-15
 * @Description:
 */
import { mount } from "@vue/test-utils";
import Counter from "@/components/Counter";
// 断言发出的事件
test("emits an event when clicked", () => {
  const wrapper = mount(Counter);

  wrapper.find("button").trigger("click");
  /**
   * 首先要注意的是emitted()返回一个对象，其中每个键都匹配一个发出的事件。
   */
  expect(wrapper.emitted()).toHaveProperty("increment");
});

//断言事件的参数
test("emits an count with count when clicked", () => {
  const wrapper = mount(Counter);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");
  // `emitted()` accepts an argument. It returns an array with all the
  // occurrences of `this.$emit('increment')`.
  const incrementEvent = wrapper.emitted("increment");

  expect(incrementEvent).toHaveLength(2);

  // Notice that the value is an array.
  expect(incrementEvent[0]).toEqual([1]);

  expect(incrementEvent[1]).toEqual([2]);
});
