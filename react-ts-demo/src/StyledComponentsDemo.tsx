import React, { FC } from "react";
import styled, { css } from "styled-components";

// Button 组件
type ButtonPropsType = {
  $primary?: boolean;
};
const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props: ButtonPropsType) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;

// Container 组件
const Container = styled.div`
  text-align: center;
`;

const Demo: FC = () => {
  return (
    <div>
      <p>styled-components demo</p>
      <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </div>
  );
};

export default Demo;
