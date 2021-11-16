/*
 * @Date: 2021-11-16
 * @Description:
 */

import { mount } from "@vue/test-utils";

import FormHandling2 from "@/components/FormHandling2";

test("submits a form", async () => {
  const wrapper = mount(FormHandling2);

  await wrapper.find("input[type=email]").setValue("my@email.com");

  await wrapper.find("textarea").setValue("Lorem ipsum dolor sit amet");

  await wrapper.find("select").setValue("new-york");

  await wrapper.find("input[type=checkbox]").setChecked(true);

  await wrapper.find("input[type=radio][value=weekly]").setChecked();
});
