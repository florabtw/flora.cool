import styled from "styled-components";

const Attachment = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --negative-block-padding: calc(-1 * var(--block-padding));
  --negative-inline-padding: calc(-1 * var(--inline-padding));

  margin: 8px var(--negative-inline-padding) var(--negative-block-padding);
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export default Attachment;
