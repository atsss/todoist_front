import React from "react";
import { shallow } from "enzyme";
import LoginTemplate from "./";
import Button from "../../atoms/Button";
import { SessionContainer } from "../../../containers";

it("renders without crashing", () => {
  const mockCallBack = jest.fn();
  setupSpy(mockCallBack);
  const wrapper = shallow(<LoginTemplate />);
  const button = wrapper.find(Button);

  expect(button.length).toEqual(1);

  button.simulate("click");
  expect(mockCallBack).toBeCalled();

  const { email, password, setMessage } = mockCallBack.mock.calls[0][0];
  expect(email).toEqual("test01@example.com");
  expect(password).toEqual("passpass");
  expect(setMessage).toBeDefined();
});

const setupSpy = mockCallBack =>
  jest
    .spyOn(SessionContainer, "useContainer")
    .mockImplementation(() => ({ login: mockCallBack }));
