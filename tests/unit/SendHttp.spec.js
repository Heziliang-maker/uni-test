/*
 * @Date: 2021-11-18
 * @Description:
 */

import { mount } from "@vue/test-utils";
import axios from "axios";
import SendHttp from "@/components/SendHttp";

// 等待promise执行完成
import flushPromises from "flush-promises";

const mockPostList = [
  { id: 1, title: "a" },
  { id: 2, title: "b" },
];

// 注意写法
jest.mock("axios", () => ({
  get: jest.fn(() => mockPostList),
}));

test("loads posts on button click", async () => {
  const wrapper = mount(SendHttp);

  await wrapper.get("button").trigger("click");

  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("/api/posts");

  // Wait until the DOM updates.
  await flushPromises();

  const posts = wrapper.findAll('[data-test="post"]');
  expect(posts).toHaveLength(2);
  console.log("posts=>", posts);
  expect(posts.at(0).text()).toContain("a");
  expect(posts.at(1).text()).toContain("b");
});
