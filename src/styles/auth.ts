import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 7;

    background: rgb(72, 91, 255);
    background: linear-gradient(
      142deg,
      rgba(72, 91, 255, 1) 0%,
      rgba(255, 89, 248, 1) 100%
    );

    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 8;

    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 340px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font: 700 24px "Poppins", sans-serif;
      margin: 64px 0 24px;
    }

    form {
      .inputGroup {
        display: flex;
        align-items: center;
        margin: 20px 0;
        padding: 0;

        input {
          height: 50px;
          border-radius: 0;
          padding: 0 16px;
          background: #fff;
          border: 1px solid #a8a8b3;
        }

        button {
          border-radius: 0;
        }
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }

  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      border: 3px solid #835afd;
    }

    h2 {
      margin: 40px 0;

      span {
        color: #835afd;
      }
    }
  }

  .createRoom {
    margin-top: 64px;
    height: 50px;
    border-radius: 0 8px 0 8px;
    font-weight: 500;
    border: 1px solid #ea4335;
    color: #ea4335;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    /* transition: filter 0.2s; */
    transition: transform 0.35s ease-in-out;

    img {
      margin-right: 10px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
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
