import React from "react";

export function containerPresenter(Container, Presenter) {
  return props => (
    <Container
      presenter={presenterProps => <Presenter {...presenterProps} />}
      {...props}
    />
  );
}
