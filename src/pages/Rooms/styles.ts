import styled from "styled-components";

export const RoomsContainer = styled.div`
  background: var(--bg-body);
  padding-bottom: 20px;
  min-height: 100vh;

  .content {
    max-width: min(80em, 70%);
    margin: 20px auto;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 50rem) {
      flex-direction: column-reverse;
    }

    main {
      flex: 2;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 10px;

        h1 {
          color: var(--txt-primary);
        }
      }

      .rooms {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
        gap: 20px;
      }
    }

    aside {
    }
  }
`;
