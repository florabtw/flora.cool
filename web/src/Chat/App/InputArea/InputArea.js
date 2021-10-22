import styled from "styled-components";

const InputArea = () => {
  return (
    <Wrapper>
      <TextInput type="text" />
      <SubmitButton>&gt;</SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  grid-gap: 8px;
  padding: 16px 12px;
`;

const TextInput = styled.input`
  border-radius: 18px;
  border: none;
  box-shadow: 0px 4px 8px hsl(0 0% 0% / 0.6);
  height: 36px;
  font-size: 1rem;
  flex: 1;
  padding: 0px 12px;
  width: 0px;
`;

const SubmitButton = styled.button`
  background: white;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 4px 8px hsl(0 0% 0% / 0.6);
  height: 36px;
  flex: 0 0 36px;
`;

export default InputArea;
