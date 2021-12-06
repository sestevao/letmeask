import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: var(--purple-light);
    color: var(--white-medium);

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    & > img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      color: var(--white);
      line-height: 32px;
      margin-top: 16px;
    }

    @media (max-width: 55rem) {
      display: none;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--bg-body);

    @media (max-width: 55rem) {
      padding-top: 8rem;
      padding-bottom: 4rem;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    width: 100%;
    max-width: 340px;
    text-align: center;

    & > img,
    & > svg {
      align-self: center;
    }

    h2 {
      font: 700 24px "Poppins", sans-serif;
      margin: 64px 0 24px;
    }

    form {
      input {
        height: 50px;
        border-radius: 0 8px;
        padding: 0 16px;
        background: var(--bg-input);
        border: 1px solid var(--gray-medium);
        color: var(--txt-primary);
      }

      button {
        background: var(--purple-light);
        color: var(--white-light);
        border-radius: 0 8px;
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: var(--txt-details);
      margin-top: 16px;

      a {
        color: var(--pink-medium);
      }
    }
  }

  .createRoom {
    margin-top: 64px;
    height: 50px;
    font-weight: 500;
    color: var(--white-medium);

    background-color: var(--google);
    border-radius: 0 8px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: transform 0.35s ease-in-out;

    img {
      margin-right: 10px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    color: var(--txt-primary);

    img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      border: 3px solid var(--purple-light);
    }

    h2 {
      margin: 40px 0;

      span {
        color: var(--purple-light);
      }
    }
  }

  .separator {
    font-size: 14px;
    color: var(--gray-medium);

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--gray-medium);
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: var(--gray-medium);
      margin-left: 16px;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column-reverse;
    margin: 0;

    aside {
      align-items: center;
      text-align: center;
      height: 100%;
      padding: 0;

      > img {
        width: 100px;
      }
    }

    main {
      flex: 7;
    }
  }
`;
