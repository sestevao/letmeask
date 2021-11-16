import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: var(--purple2);
  color: var(--white2);
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.outlined {
    background-color: var(--white2);
    border: 1px solid var(--purple2);
    color: var(--purple2);

    transition: background 0.3s;

    &:hover {
      background: var(--purple2);
      color: var(--white2);
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
