import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { shallow, mount } from "enzyme";
import { updateWrapper } from "../../../spec/wait";
import { TaskListContainer, TaskListPresenter, filterTasks } from "./";
import Button from "../../atoms/Button";
import ScoreOptions from "../../molecules/ScoreOptions";
import { CREATE_RESULT_MUTATION } from "../../../graphqls/mutations";

it("renders without crashing", () => {
  const mutationMockCallBack = jest.fn();
  const hooksMockCallBack = jest.fn();
  const props = {
    id: "1",
    hour: 10,
    minute: 30,
    name: "hoge",
    tags: [{ name: "fuga" }],
    score: 8,
    createResult: mutationMockCallBack,
    setScore: hooksMockCallBack
  };

  const wrapper = shallow(<TaskListPresenter {...props} />);
  const button = wrapper.find(Button);
  const select = wrapper.find(ScoreOptions);

  expect(button.length).toEqual(1);
  expect(button).toHaveProp({ onClick: mutationMockCallBack });
  expect(select.length).toEqual(1);
  expect(select).toHaveProp({ setScore: hooksMockCallBack });
});

describe("logic test", () => {
  it("passes mutation function as prorps", () => {
    const mockCallBack = jest.fn(() => <div>test</div>);
    const wrapper = setupContainer({ presenter: mockCallBack });

    expect(mockCallBack).toBeCalled();

    const { createResult, setScore, score } = mockCallBack.mock.calls[0][0];

    expect(createResult).toBeDefined();
    expect(setScore).toBeDefined();
    expect(score).toEqual(8);
  });

  it("filter done task from task lists", () => {
    const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const doneTask = { id: 2 };
    const newTasks = filterTasks(tasks, doneTask);

    expect(newTasks.length).toEqual(2);
    expect(newTasks.map(({ id }) => id).includes(2)).toBeFalsy();
  });
});

const setupContainer = ({ presenter, id = 1, ...props }) =>
  mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TaskListContainer presenter={presenter} id={id} {...props} />
    </MockedProvider>
  );

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
