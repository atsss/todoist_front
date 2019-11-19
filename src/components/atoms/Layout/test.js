import React from "react";
import { shallow, mount } from "enzyme";
import Layout, { LayoutContainer, GridMain, GridSide } from "./";

it("renders without crashing", () => {
  const wrapper = mount(
    <Layout>
      <GridMain>main section</GridMain>
      <GridSide>nav section</GridSide>
    </Layout>
  );
  const main = wrapper.find("main");
  const nav = wrapper.find("nav");

  expect(main.length).toEqual(1);
  expect(main).toHaveText("main section");
  expect(nav.length).toEqual(1);
  expect(nav).toHaveText("nav section");
});

describe("logic test", () => {
  let mockCallBack;

  beforeEach(() => {
    mockCallBack = jest.fn();
  });

  it("normal", () => {
    const wrapper = shallow(
      <LayoutContainer presenter={mockCallBack}>
        <GridMain>main section</GridMain>
        <GridSide>nav section</GridSide>
      </LayoutContainer>
    );

    expect(mockCallBack).toBeCalled();

    const {
      parts: { main, side }
    } = mockCallBack.mock.calls[0][0];
    expect(main).toBe("main section");
    expect(side).toBe("nav section");
  });

  it("crashing becase of lack of GridSide tag", () => {
    const raisError = () =>
      shallow(
        <LayoutContainer presenter={mockCallBack}>
          <GridMain>main section</GridMain>
        </LayoutContainer>
      );

    expect(raisError).toThrowError(TypeError);
  });

  it("crashing becase of lack of GridMain tag", () => {
    const raisError = () =>
      shallow(
        <LayoutContainer presenter={mockCallBack}>
          <GridSide>nav section</GridSide>
        </LayoutContainer>
      );

    expect(raisError).toThrowError(TypeError);
  });
});
