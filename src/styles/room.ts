import styled from "styled-components";

export const PageRoom = styled.div`
  background: var(--bg-body);
  padding-bottom: 20px;
  min-height: 100vh;

  .content {
    max-width: min(1280px, 70%);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 3rem;

    @media screen and (max-width: 50rem) {
      flex-direction: column-reverse;
    }

    main {
      flex: 2;

      .room-title {
        display: flex;
        align-items: center;
        margin: 32px 0 24px;

        > h1 {
          font: 24px "Poppins", sans-serif;
          color: var(--txt-primary);
        }

        span {
          margin-left: 16px;
          background: var(--pink-medium);
          border-radius: 9999px;
          padding: 8px 16px;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
        }
      }

      form {
        textarea {
          width: 100%;
          min-height: 130px;
          resize: vertical;
          padding: 16px;

          border-radius: 0 8px;
          background: var(--bg-input);
          color: var(--txt-input);
          box-shadow: 0 2px 12px var(--shadow);
          border: 0;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;

          .user {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            color: var(--txt-details);

            > img {
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border: 3px solid var(--purple-light);
            }

            .user-info {
              display: flex;
              flex-direction: column;

              & > span {
                font-weight: 400;
                font-size: 14px;
              }
            }

            > button {
              background: transparent;
              border: none;
              font-size: 14px;
              color: var(--purple-light);
              border-bottom: 1px solid var(--purple-light);
            }
          }

          > span {
            font-size: 14px;
            color: #737380;
            font-weight: 500;

            button {
              background: transparent;
              border: 0;
              color: #835afd;
              text-decoration: underline;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
      }

      .question-list {
        margin-top: 32px;

        > button {
          box-shadow: none;
        }
      }
    }

    aside {
      margin: 32px 0;
    }
  }
`;

export const NoQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--txt-primary);
  padding: 50px 0;

  h3 {
    font-size: 25px;
  }
`;
