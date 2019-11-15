import React from "react";
import { shallow } from "enzyme";
import Badge from "./";

it("renders without crashing", () => {
  const wrapper = shallow(<Badge>hello</Badge>);
  const span = wrapper.find("span");

  expect(span.length).toEqual(1);
  expect(span).toHaveText("hello");
});

it("switch tag element", () => {
  const wrapper = shallow(<Badge tag="strong">hello</Badge>);

  expect(wrapper.find("strong").length).toEqual(1);
  expect(wrapper.find("span").length).toEqual(0);
});
