import styled from "styled-components";

export const QuestionDiv = styled.div`
  background: var(--bg-input);
  border-radius: 0 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: var(--purple-white);
    border: 1px solid var(--purple-light);

    footer .user-info span {
      color: var(--txt-primary);
    }
  }

  &.answered {
    background: var(--white-medium);
  }

  p {
    color: var(--txt-primary);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: var(--gray-dark);
        gap: 8px;

        &.liked {
          color: var(--purple-light);

          svg path {
            stroke: var(--purple-light);
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--purple-light);
  }

  span {
    color: var(--txt-details);
    font-size: 14px;
  }
`;
