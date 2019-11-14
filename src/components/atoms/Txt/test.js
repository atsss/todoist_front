import React from "react";
import { shallow } from "enzyme";
import Txt from "./";

it("renders without crashing", () => {
  const wrapper = shallow(<Txt>hello</Txt>);
  const paragraph = wrapper.find("p");

  expect(paragraph.length).toEqual(1);
  expect(paragraph).toHaveText("hello");
});

it("switch tag element", () => {
  const wrapper = shallow(<Txt tag="span">hello</Txt>);

  expect(wrapper.find("span").length).toEqual(1);
  expect(wrapper.find("p").length).toEqual(0);
});
