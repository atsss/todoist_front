import React from "react";
import { shallow } from "enzyme";
import Button from "./";

it("renders without crashing", () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(<Button text={"submit"} onClick={mockCallBack} />);
  const button = wrapper.find("button");

  expect(button.length).toEqual(1);

  button.simulate("click");
  expect(mockCallBack).toBeCalled();
});
