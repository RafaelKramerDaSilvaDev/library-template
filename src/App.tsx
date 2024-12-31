import styled from "styled-components";
import { Example } from "../lib/main";

export const Playground = () => {
  return (
    <Template>
      <Example />

      <Example text="Hello World!" />
    </Template>
  );
};

const Template = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: calc(100dvh - 48px);
  padding: 16px;
`;
