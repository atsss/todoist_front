import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { mount } from "enzyme";
import { updateWrapper } from "../../../spec/wait";
import TaskIndexPage from "./";
import TaskIndexTemplate from "../../templates/TaskIndexTemplate";
import { GET_TASKS } from "../../../graphqls/queries";

const tasks = [
  {
    id: "1",
    name: "hoge",
    schedule: { hour: "10", minute: "30" },
    tags: [{ name: "fuga" }]
  }
];
const mocks = [
  {
    request: {
      query: GET_TASKS
    },
    result: {
      data: { tasks }
    }
  }
];

it("renders without crashing", async () => {
  let wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TaskIndexPage />
    </MockedProvider>
  );

  wrapper = await updateWrapper(wrapper);
  const component = wrapper.find(TaskIndexTemplate);

  expect(component.length).toEqual(1);
  expect(component).toHaveProp({ tasks });
});
