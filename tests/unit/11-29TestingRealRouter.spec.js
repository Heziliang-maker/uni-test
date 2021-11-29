/*
 * @Date: 2021-11-29
 * @Description:
 */
import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import Home from "@/views/Home.vue";
import { routes } from "@/router";
import VueRouter from "vue-router";
const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter({ routes });

test("routing", async () => {
  const wrapper = mount(App, {
    router,
    localVue,
  });

  router.push("/");
  await wrapper.vm.$nextTick();

  // expect(wrapper.html()).toContain("This is an home page");
  expect(wrapper.findComponent(Home).exists()).toBe(true);
});
