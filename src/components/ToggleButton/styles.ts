import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 10px;

  .icons {
    cursor: pointer;
  }

  &:hover {
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
  }
`;
