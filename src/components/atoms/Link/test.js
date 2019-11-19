import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Link from "./";

it("renders without crashing", () => {
  const wrapper = mount(
    <MemoryRouter>
      <Link to="/hoge">hello</Link>
    </MemoryRouter>
  );
  const link = wrapper.find(RouterLink);

  expect(link.length).toEqual(1);
  expect(link).toHaveProp({ to: "/hoge", children: "hello" });
});
