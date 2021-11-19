import styled from "styled-components";

export const RoomCodeButton = styled.button`
  height: 40px;
  border-radius: 0 8px;
  overflow: hidden;

  background: transparent;
  border: 1px solid var(--purple-light);
  color: var(--purple);
  cursor: pointer;

  display: flex;

  .icon {
    background-color: var(--purple-light);
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;

    padding: 0 16px 0 12px;
    width: 250px;
    font-size: 14px;
    font-weight: 500;
  }

  .text {
    padding: 0;
    display: block;
    flex: 1;
    color: var(--txt-primary);
    align-self: center;
  }
`;
