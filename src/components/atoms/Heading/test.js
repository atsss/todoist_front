import React from "react";
import { shallow, mount } from "enzyme";
import Heading, { HeadingContainer } from "./";

it("renders without crashing", () => {
  const wrapper = mount(<Heading>title</Heading>);
  const heading = wrapper.find("h2");

  expect(heading.length).toEqual(1);
  expect(heading).toHaveText("title");
});

describe("logic test", () => {
  let mockCallBack;

  beforeEach(() => {
    mockCallBack = jest.fn();
  });

  it("normal", () => {
    const wrapper = shallow(<HeadingContainer presenter={mockCallBack} />);

    expect(mockCallBack).toBeCalled();

    const { tag, visualLevel } = mockCallBack.mock.calls[0][0];
    expect(tag).toBe("h2");
    expect(visualLevel).toBe(2);
  });

  it("pass only level as prorps", () => {
    const wrapper = shallow(
      <HeadingContainer presenter={mockCallBack} level={3} />
    );

    const { tag, visualLevel } = mockCallBack.mock.calls[0][0];
    expect(tag).toBe("h3");
    expect(visualLevel).toBe(3);
  });

  it("pass level and visual level as prorps", () => {
    const wrapper = shallow(
      <HeadingContainer presenter={mockCallBack} level={3} visualLevel={4} />
    );

    const { tag, visualLevel } = mockCallBack.mock.calls[0][0];
    expect(tag).toBe("h3");
    expect(visualLevel).toBe(4);
  });
});
