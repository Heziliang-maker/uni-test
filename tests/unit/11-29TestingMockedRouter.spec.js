/*
 * @Date: 2021-11-29
 * @Description:我们能够使用jest.fn()来监视this.$router.push被调用的次数和参数。最重要的是，
 * 我们不必在测试中处理 Vue Router 的复杂性或警告！我们只关心测试应用程序逻辑。
 */

import { mount } from "@vue/test-utils";
import TestingMockedRouter from "@/components/TestingMockedRouter";

test("allows  authenticated user to edit a poster", async () => {
  const mockRoute = {
    params: {
      id: 1,
    },
  };

  const mockRouter = {
    push: jest.fn(),
  };

  const wrapper = mount(TestingMockedRouter, {
    props: {
      isAuthenticated: true,
    },
    mocks: {
      $route: mockRoute,
      $router: mockRouter,
    },
  });

  await wrapper.find("button").trigger("click");

  expect(mockRouter.push).toHaveBeenCalledTimes(1);
  // 传参
  expect(mockRouter.push).toHaveBeenCalledWith("/posts/1/edit");
});
