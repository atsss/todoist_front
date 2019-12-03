import React from "react";
import renderer from "react-test-renderer";
import { MockedProvider } from "@apollo/react-testing";
import TaskIndexTemplate from "./";
import { CREATE_RESULT_MUTATION } from "../../../graphqls/mutations";

it("snapshot", () => {
  const tree = setupTree();
  expect(tree).toMatchSnapshot();
});

const setupTree = () =>
  renderer
    .create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TaskIndexTemplate tasks={tasks} />
      </MockedProvider>
    )
    .toJSON();

const tasks = [
  {
    id: "1",
    name: "hoge",
    schedule: { hour: 10, minute: 30 },
    tags: [{ name: "fuga" }]
  }
];

const result = {
  id: 1,
  score: 8,
  task: { id: 1, name: "hoge" }
};

const mocks = [
  {
    request: {
      query: CREATE_RESULT_MUTATION,
      variables: { taskId: 1, score: 8 }
    },
    result: {
      data: { createResult: result }
    }
  }
];
