import { FC } from "react";

type TextType = {
  color: string;
  fontSize: string;
};

export const Text: FC<TextType> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキスト</p>;
};
