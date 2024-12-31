import * as S from "./styles";

type ExampleProps = {
  text?: string;
};

export const Example = ({ text }: ExampleProps) => {
  return (
    <S.Container>
      <S.Span>{text ? text : "I am example!"}</S.Span>
    </S.Container>
  );
};
