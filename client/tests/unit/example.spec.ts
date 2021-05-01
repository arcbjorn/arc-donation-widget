import { shallowMount } from "@vue/test-utils";
import Widget from "@/components/Widget.vue";

describe("Widget.vue", () => {
  it("renders props.title when passed", () => {
    const title = "new message";
    const wrapper = shallowMount(Widget, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
