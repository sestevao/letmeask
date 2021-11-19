import styled from "styled-components";

type ButtonProps = {
  btnType: "fill" | "outline";
};

export const ButtonStyled = styled.button<ButtonProps>`
  height: 50px;
  font-weight: 500;
  padding: 0 32px;

  background: ${({ btnType }) =>
    btnType === "fill" ? "var(--purple-light)" : "var(--purple-white)"};

  color: ${({ btnType }) =>
    btnType === "fill" ? "var(--txt-primary)" : "var(--purple-light)"};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;
  border-radius: 0 8px;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    border: 1px solid var(--purple-light);
    color: var(--white-light);

    transition: background 0.3s;

    &:hover {
      background: var(--purple-light);
      color: var(--white-light);
    }
  }

  div {
    margin-right: 1rem;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
