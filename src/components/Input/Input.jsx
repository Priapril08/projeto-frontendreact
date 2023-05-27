import { InputContainer } from "./InputStyles";

export const Input = ({ label, ...rest }) => {
  return (
    <InputContainer>
      <div>{label}</div>
      <input {...rest} />
    </InputContainer>
  );
};
