// /*
//  * @Date: 2021-11-17
//  * @Description:
//  */

// import { mount, createLocalVue } from "@vue/test-utils";

// import ComplexForm from "@/components/ComplexForm";
// // import ElementUI from "element-ui";

// // const localVue = createLocalVue();
// // localVue.use(ElementUI);

// test("emits textarea value on click", async () => {
//   const wrapper = mount(ComplexForm);

//   const description = "some text for description";

//   // findComponent 查找组件实例
//   await wrapper.findComponent({ ref: "description" }).setValue(description);

//   wrapper.find("button").trigger("click");

//   expect(wrapper.emitted("submit"[0][0])).toBe(description);
// });
