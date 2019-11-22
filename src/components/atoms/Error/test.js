import React from "react";
import { shallow } from "enzyme";
import Error from "./";
import { SessionContainer } from "../../../containers";

let mockCallBack;
let spy;

beforeEach(() => {
  mockCallBack = jest.fn();
  spy = jest
    .spyOn(SessionContainer, "useContainer")
    .mockImplementation(() => ({ logout: mockCallBack }));
});

it("renders without crashing", () => {
  const wrapper = setupWrapper(400);
  const div = wrapper.find("div");

  expect(div.length).toEqual(1);
  expect(div).toHaveText("Error");
});

describe("logic test", () => {
  it("logout function is not called", () => {
    const wrapper = setupWrapper(400);
    expect(mockCallBack).not.toBeCalled();
  });

  it("logout function is called", () => {
    const wrapper = setupWrapper(401);
    expect(mockCallBack).toBeCalled();
  });
});

const setupWrapper = statusCode =>
  shallow(<Error error={{ networkError: { statusCode } }} />);
