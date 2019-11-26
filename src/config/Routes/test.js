import React from "react";
import { Redirect } from "react-router-dom";
import { shallow } from "enzyme";
import { Auth } from "./";
import { SessionContainer } from "../../containers";
import Layout from "../../components/organisms/Layout";

describe("renders without crashing", () => {
  it("already login", () => {
    setupSpy(true);
    const wrapper = setupWrapper();

    expect(wrapper.find(Layout).length).toEqual(1);
  });

  it("not yet login", () => {
    setupSpy(false);
    const wrapper = setupWrapper();

    expect(wrapper.find(Redirect).length).toEqual(1);
  });
});

const setupSpy = boolean =>
  jest
    .spyOn(SessionContainer, "useContainer")
    .mockImplementation(() => ({ isLogin: boolean }));

const setupWrapper = () => {
  const wrapper = shallow(<Auth>hello</Auth>);
  const ComponentToRender = wrapper.prop("render");
  return shallow(<ComponentToRender />);
};
