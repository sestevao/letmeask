import styled from "styled-components";

type ContainerProps = {
  btnStyle?: "fill" | "outline" | "primary";
};

export const CardContainer = styled.div<ContainerProps>`
  background: ${({ btnStyle }) =>
    btnStyle === "primary"
      ? "var(--pink-medium)"
      : btnStyle === "fill"
      ? "var(--bg-input)"
      : "transparent"};

  color: ${({ btnStyle }) =>
    btnStyle === "primary" ? "var(--white-light)" : "var(--txt-primary)"};

  border: ${({ btnStyle }) =>
    btnStyle === "outline" ? ".2rem solid var(--txt-primary)" : "none"};

  width: auto;
  border-radius: 0 8px;
  padding: 10px 20px;
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 20%);
  margin: 10px;
  
  > h4 {
    margin-top: 0.8rem;
    text-transform: capitalize;
  }

  > h3 {
    font-size: 3.6rem;
  }
`;
